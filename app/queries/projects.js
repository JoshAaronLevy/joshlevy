const database = require('./database-connection');

module.exports = {
  list() {
    return database('projects').select();
  },
  read(id) {
    return database('projects').select().where('id', id).first();
  },
  create(projects) {
    return database('projects')
      .insert(projects)
      .returning('*')
      .then(record => record[0]);
  },
  update(id, projects) {
    return database('projects')
      .update(projects)
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('projects').delete().where('id', id);
  }
};