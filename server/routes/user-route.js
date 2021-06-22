const UserCtrl = require("../controller/user-ctrl")
const express = require('express')
const router = express.Router()


// create users api
router.post('/user', UserCtrl.createUser)

// update user by Id api
router.get('/user/:id', UserCtrl.updateUser)

// delete user by Id api
router.delete('movie/:id', UserCtrl.deleteUser)

// express router method to create route for getting all users
router.get('/users', UserCtrl.getUsers)

// express router method to create route for getting users by id
router.get('/user/:id', UserCtrl.getUserById)

module.exports = router