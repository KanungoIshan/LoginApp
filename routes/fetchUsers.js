const express = require('express')

const usersController = require('../controllers/getUsers');

const router = express.Router();


router.get('/getUsers', usersController.fetchUsers);

module.exports = router;