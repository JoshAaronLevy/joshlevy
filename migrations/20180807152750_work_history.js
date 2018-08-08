exports.up = function (knex, Promise) {
  return knex.schema.createTable('work_history', work_history => {
    work_history.increments();
    work_history.string('company');
    work_history.string('title');
    work_history.string('employment_date');
    work_history.text('details');
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('work_history');
};