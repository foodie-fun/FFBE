
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'username1', password: 'someHashValue'},
        {username: 'username2', password: 'someHashValue2'},
      ]);
    });
};
