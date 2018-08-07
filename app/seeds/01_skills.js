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
      }, {
        id: 4,
        name: 'Node.js',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://aws.com'
      }, {
        id: 5,
        name: 'PostgreSQL',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://aws.com'
      }, {
        id: 6,
        name: 'MongoDB',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://aws.com'
      }, {
        id: 7,
        name: 'MySQL',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://aws.com'
      }, {
        id: 8,
        name: 'Firebase',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://aws.com'
      }, {
        id: 9,
        name: 'Passport.js',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://aws.com'
      }, {
        id: 10,
        name: 'Stripe',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://aws.com'
      }, {
        id: 11,
        name: 'Heroku',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://aws.com'
      }, {
        id: 12,
        name: 'Knex',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://aws.com'
      }, {
        id: 13,
        name: 'Git',
        type: 'Back-End',
        experience: '3-5 years',
        img: 'https://aws.com'
      }, {
        id: 14,
        name: 'Bootstrap',
        type: 'Front-End',
        experience: '3-5 years',
        img: 'https://aws.com'
      }, {
        id: 15,
        name: 'JavaScript',
        type: 'Front-End',
        experience: '3-5 years',
        img: 'https://aws.com'
      }, {
        id: 16,
        name: 'HTML5 & CSS3',
        type: 'Front-End',
        experience: '3-5 years',
        img: 'https://aws.com'
      }]);
    });
};