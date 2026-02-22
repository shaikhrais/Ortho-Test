export async function onRequest(context) {
    const { env } = context;
    const { searchParams } = new URL(context.request.url);
    const joint = searchParams.get('joint');

    try {
        let query = 'SELECT * FROM joints_structure';
        let params = [];

        if (joint && joint !== '__ALL__') {
            query += ' WHERE joint_name = ?';
            params.push(joint);
        }

        query += ' ORDER BY category_name, relationship';

        const { results } = await env.ORTHO_TESTS_DB.prepare(query)
            .bind(...params)
            .all();

        return new Response(JSON.stringify(results), {
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
