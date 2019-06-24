
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', function (user) {
        user.increments();
        user.string('username', 125).notNullable().unique();
        user.string('password', 125).notNullable();
    }),

        knex.schema.createTable('review', function (review) {
            review.increments();
            review
                .integer('user_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            review.string('restaurant_name', 125).notNullable();
            review.string('restaurant_type', 125).notNullable();
            review.string('menu_item_name', 125).notNullable();
            review.float('menu_item_price', 125).notNullable();
            review.integer('rating', 2).notNullable();
            review.integer('wait_time', 125);
            review.date('date', 125);
            review.string('comments', 1000);

            


        });
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('games');
};
