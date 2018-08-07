const database = require('./database-connection');

module.exports = {
  list() {
    return database('skills').select();
  },
  read(id) {
    return database('skills').select().where('id', id).first();
  },
  create(skills) {
    return database('skills')
      .insert(skills)
      .returning('*')
      .then(record => record[0]);
  },
  update(id, skills) {
    return database('skills')
      .update(skills)
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('skills').delete().where('id', id);
  }
};