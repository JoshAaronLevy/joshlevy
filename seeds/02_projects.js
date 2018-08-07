exports.seed = function (knex, Promise) {
  return knex('projects').del()
    .then(function () {
      return knex('projects').insert([{
        id: 1,
        name: 'Bad Movie Night',
        snippet: `Serve data to end-users with custom API's.`,
        description: `Serve data to end-users with custom API's.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        deployedURL: 'https://bad-movie-night.firebaseapp.com',
        githubURL: 'https://github.com/joshaaronlevy/bad-movie-night'
      }, {
        id: 2,
        name: 'Dinosaur Jobs',
        snippet: `First experience with React. Created job posting site using state management.`,
        description: `First experience with React. Created job posting site using state management.`,
        gifURL: 'https://s3-us-west-2.amazonaws.com/joshlevyportfolio/projects/React-Logo.png',
        deployedURL: 'https://react-dinosaurs-1.herokuapp.com/',
        githubURL: 'https://github.com/joshaaronlevy/react-dinosaurs-1'
      }]);
    });
};