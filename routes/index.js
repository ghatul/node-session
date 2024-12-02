const express = require('express');
const router = express.Router();
const userController = require('./../controller/user.controller');
const AuthInterceptor = require('./../interceptor/auth-interceptor');

router.post('/login', userController.login);

router.post('/registration', userController.registration);

router.get('/dashboard', AuthInterceptor.requireAuth, userController.getUserList)

module.exports = router;
