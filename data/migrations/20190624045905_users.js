
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
            tbl.string('rest_name', 125).notNullable();
            tbl.string('rest_type', 125).notNullable();
            tbl.string('item_name', 125).notNullable();
            tbl.float('item_price', 125).notNullable();
            tbl.integer('rating', 2).notNullable();
            tbl.integer('wait_time', 125);
            tbl.date('date', 125);
            tbl.string('comment', 1000);
        });
};

exports.down = function (knex, Promise) {
    return knex.schema
        .dropTableIfExists('review')
        .dropTableIfExists('games');
};
