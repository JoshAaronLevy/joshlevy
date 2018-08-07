const database = require('./database-connection');

module.exports = {
  list() {
    return database('portfolio').select();
  },
  read(id) {
    return database('portfolio').select().where('id', id).first();
  },
  create(portfolio) {
    return database('portfolio')
      .insert(portfolio)
      .returning('*')
      .then(record => record[0]);
  },
  update(id, portfolio) {
    return database('portfolio')
      .update(portfolio)
      .where('id', id)
      .returning('*')
      .then(record => record[0]);
  },
  delete(id) {
    return database('portfolio').delete().where('id', id);
  }
};