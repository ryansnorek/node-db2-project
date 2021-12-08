const data = [
    {
        stuff: ""
    }
]

exports.seed = async function(knex) {
    await knex("data").truncate();
    await knex("data").insert(data)
}