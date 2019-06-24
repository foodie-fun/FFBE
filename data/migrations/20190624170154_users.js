
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('users', tbl => {
            tbl.increments();
            tbl.string('username', 125).notNullable().unique();
            tbl.string('password', 125).notNullable();
        })
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('users')
};
