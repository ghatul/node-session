const userRepository = require('./../dataaccess/user.repository');
const AuthInterceptor = require('./../interceptor/auth-interceptor');

class UserService {

  login(data, callback) {
    userRepository.find(data, (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      if (result.length) {
        const user = {id: result[0]._id, role: 'user'};
        const token = AuthInterceptor.issueToken(user);
        callback(null, { token: token });
      } else {
        callback({ message: 'No user available' }, null);
      }
    })
  }

  registration(data, callback) {
    userRepository.create(data, (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    })
  }

  getUserList(callback) {
    userRepository.find({}, (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      if (result.length) {
        callback(null, result);
      } else {
        callback(null, []);
      }
    })
  }

}

module.exports = new UserService();