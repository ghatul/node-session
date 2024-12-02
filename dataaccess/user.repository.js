const mongoService = require('./mongo.service');
const User = require('./schema/user.schema')

class UserRepository {

  create(data, callback) {
    const userModel = new User(data);
    userModel.save(function (err, result) {
      if (err) {
        callback(err, null);
      }
      callback(null, result);
    })
  }

  find(data, callback) {
    let query = data;
    const db = mongoService.getDbInstance();
    db.collection('myusers').find(query).toArray((err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    })
  }

}

module.exports = new UserRepository();