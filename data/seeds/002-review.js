
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('review').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('review').insert([
        {user_id: 1, resname: 'The Big Cheesy', restype: 'american', foodname: 'cheese sandwich', price: 3.25, rating: 5, comment: 'Comments are Here!'},
    
      ]);
    });
};
