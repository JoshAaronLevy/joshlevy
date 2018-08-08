exports.up = function (knex, Promise) {
  return knex.schema.createTable('jobs', jobs => {
    jobs.increments();
    jobs.string('company');
    jobs.string('title');
    jobs.string('employment_date');
    jobs.text('details');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('jobs');
};