exports.seed = function (knex, Promise) {
  return knex('skills').del()
    .then(function () {
      return knex('skills').insert([{
        id: 1,
        name: 'React',
        type: 'Front-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/React-Logo.png'
      }, {
        id: 2,
        name: 'Vue.js',
        type: 'Front-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Vue-Logo.png'
      }, {
        id: 3,
        name: 'Angular',
        type: 'Front-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Angular-Logo.png'
      }, {
        id: 4,
        name: 'Node.js',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/NodeJS-Logo.png'
      }, {
        id: 5,
        name: 'PostgreSQL',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/PostgreSQL-Logo.png'
      }, {
        id: 6,
        name: 'MongoDB',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/MongoDB-Logo.png'
      }, {
        id: 7,
        name: 'Mongoose',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Mongoose-Logo.png'
      }, {
        id: 8,
        name: 'MySQL',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/MySQL-Logo.png'
      }, {
        id: 9,
        name: 'C#',
        type: 'Front-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Csharp-Logo.png'
      }, {
        id: 10,
        name: 'PHP',
        type: 'Front/Back-End',
        experience: '3-5 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/PHP-Logo.png'
      }, {
        id: 11,
        name: 'WordPress',
        type: 'Front/Back-End',
        experience: '3-5 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/WordPress-Logo.png'
      }, {
        id: 12,
        name: 'Docker',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Docker-Logo.png'
      }, {
        id: 13,
        name: 'AWS',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/AWS-Logo.png'
      }, {
        id: 14,
        name: 'Firebase',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Firebase-Logo.png'
      }, {
        id: 15,
        name: 'Passport.js',
        type: 'Back-End',
        experience: '1-3 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/PassportJS-Logo.png'
      }, {
        id: 16,
        name: 'Stripe',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Stripe-Logo.png'
      }, {
        id: 17,
        name: 'Heroku',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Heroku-Logo.png'
      }, {
        id: 18,
        name: 'Knex.js',
        type: 'Back-End',
        experience: '>1 year',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/KnexJS-Logo.png'
      }, {
        id: 19,
        name: 'RESTful API',
        type: 'Back-End',
        experience: '1-3 Years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/RestAPI-Logo.png'
      }, {
        id: 20,
        name: 'Git',
        type: 'Back-End',
        experience: '3-5 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Git-Logo.png'
      }, {
        id: 21,
        name: 'JavaScript',
        type: 'Front/Back-End',
        experience: '3-5 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/JavaScript-Logo.jpg'
      }, {
        id: 22,
        name: 'Bootstrap 4',
        type: 'Front-End',
        experience: '3-5 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/Bootstrap-Logo.png'
      }, {
        id: 23,
        name: 'SASS',
        type: 'Front-End',
        experience: '3-5 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/SASS-Logo.png'
      }, {
        id: 24,
        name: 'LESS',
        type: 'Front-End',
        experience: '3-5 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/LESS-Logo.png'
      }, {
        id: 25,
        name: 'HTML5 & CSS3',
        type: 'Front-End',
        experience: '3-5 years',
        img: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/skills/HTML5-CSS3-Logo.gif'
      }]);
    });
};