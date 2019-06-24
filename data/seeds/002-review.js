
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('review').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert([
        {user_id: 1, rest_name: 'The Big Cheesy', rest_type: 'american', item_name: 'cheese sandwich', item_price: 3.25, rating: 5, wait_time: 25, date: '01-02-2019', comment: 'Comments are Here!'},
    
      ]);
    });
};
