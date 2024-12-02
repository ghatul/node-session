const UserService = require('./../service/user.service');

class UserController {

  static login(req, res) {
    UserService.login(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(200).send(result);
    })
  }

  static registration(req, res) {
    UserService.registration(req.body, (err, result) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.status(200).send(result);
    })
  }

  static getUserList(req, res) {
    UserService.getUserList((err, result) => {
      if(err) {
        res.status(500).send(err);
        return;
      }
      res.status(200).send(result);
    })
  }

}

module.exports = UserController;