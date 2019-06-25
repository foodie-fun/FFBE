
exports.up = function (knex, Promise) {
    return knex.schema
        .createTable('review', tbl => {
            tbl.increments();
            tbl
                .integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.string('resname', 125).notNullable();
            tbl.string('restype', 125).notNullable();
            tbl.string('foodname', 125).notNullable();
            tbl.float('price', 125).notNullable();
            tbl.integer('rating', 3).notNullable();
            tbl.string('comment', 1000);
        });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('review')
};
