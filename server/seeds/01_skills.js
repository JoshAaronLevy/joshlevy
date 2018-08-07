exports.seed = function (knex, Promise) {
  return knex('skills').del()
    .then(function () {
      return knex('skills').insert([{
        id: 1,
        name: 'React',
        type: 'Front-End',
        experience: '>1 year',
        img: 'https://aws.com'
      }, {
        id: 2,
        name: 'Vue.js',
        type: 'Front-End',
        experience: '>1 year',
        img: 'https://aws.com'
      }, {
        id: 3,
        name: 'Angular',
        type: 'Front-End',
        experience: '>1 year',
        img: 'https://aws.com'
      }]);
    });
};