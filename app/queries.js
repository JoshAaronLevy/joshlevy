const database = require('./database-connection');

module.exports = {
  list(table) {
    return database(table).select();
  },
  read(id) {
    return database(table).select().where('id', id).first();
  },
  create(skills) {
    return database(table)
      .insert(skills)
      .returning('*')
      .then(record => record[0]);
  },
  update(id, skills) {
    return database(table)
      .update(skills)
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database(table).delete().where('id', id);
  }
};