export async function onRequestGet({ env }) {
    try {
        const { results } = await env.ORTHO_TESTS_DB.prepare(
            "SELECT * FROM tests ORDER BY id ASC"
        ).all();

        return new Response(JSON.stringify(results), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}

export async function onRequestPost({ request, env }) {
    try {
        const payload = await request.json();
        const tests = Array.isArray(payload) ? payload : payload.tests;

        if (!tests || !Array.isArray(tests)) {
            return new Response(JSON.stringify({ error: "Invalid payload" }), {
                status: 400
            });
        }

        // For logging, we'll fetch existing records first
        const ids = tests.map(t => t.id);
        const placeholders = ids.map(() => '?').join(',');
        const { results: existingTests } = await env.ORTHO_TESTS_DB.prepare(
            `SELECT id, youtubeUrl, thumbnailUrl FROM tests WHERE id IN (${placeholders})`
        ).bind(...ids).all();

        const logStatements = [];
        const updateStatements = [];

        tests.forEach(test => {
            // Use loose comparison because test.id from JSON might be a string, while existing.id from D1 is a number
            const existing = existingTests.find(e => e.id == test.id);

            // Check for changes to log
            if (existing) {
                const oldYT = existing.youtubeUrl || "";
                const newYT = test.youtubeUrl || "";
                if (test.youtubeUrl !== undefined && newYT !== oldYT) {
                    logStatements.push(
                        env.ORTHO_TESTS_DB.prepare(`
                            INSERT INTO update_logs (test_id, field_name, old_value, new_value)
                            VALUES (?, 'youtubeUrl', ?, ?)
                        `).bind(test.id, oldYT, newYT)
                    );
                }

                const oldThumb = existing.thumbnailUrl || "";
                const newThumb = test.thumbnailUrl || "";
                if (test.thumbnailUrl !== undefined && newThumb !== oldThumb) {
                    logStatements.push(
                        env.ORTHO_TESTS_DB.prepare(`
                            INSERT INTO update_logs (test_id, field_name, old_value, new_value)
                            VALUES (?, 'thumbnailUrl', ?, ?)
                        `).bind(test.id, oldThumb, newThumb)
                    );
                }
            }

            updateStatements.push(
                env.ORTHO_TESTS_DB.prepare(`
                    INSERT INTO tests (id, name, joint, purpose, protocol, positive, negative, youtubeUrl, thumbnailUrl, youtubeUser)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
                    ON CONFLICT(id) DO UPDATE SET
                        name = excluded.name,
                        joint = excluded.joint,
                        purpose = excluded.purpose,
                        protocol = excluded.protocol,
                        positive = excluded.positive,
                        negative = excluded.negative,
                        youtubeUrl = excluded.youtubeUrl,
                        thumbnailUrl = excluded.thumbnailUrl,
                        youtubeUser = excluded.youtubeUser,
                        updatedAt = CURRENT_TIMESTAMP
                `).bind(
                    test.id,
                    test.name,
                    test.joint,
                    test.purpose || null,
                    test.protocol || null,
                    test.positive || null,
                    test.negative || null,
                    test.youtubeUrl || "",
                    test.thumbnailUrl || "",
                    test.youtubeUser || ""
                )
            );
        });

        if (logStatements.length > 0 || updateStatements.length > 0) {
            await env.ORTHO_TESTS_DB.batch([...logStatements, ...updateStatements]);
        }

        return new Response(JSON.stringify({ success: true, count: tests.length }), {
            headers: { "Content-Type": "application/json" }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
