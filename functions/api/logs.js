export async function onRequestGet({ env }) {
    try {
        const { results } = await env.ORTHO_TESTS_DB.prepare(
            "SELECT * FROM update_logs ORDER BY timestamp DESC LIMIT 100"
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
