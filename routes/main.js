// require express package use const & set up the router
const express = require('express');
const router = express.Router();

// look for controller functions
const {login, dashboard} = require('../controllers/main');

const authMiddleware = require('../middleware/auth');

// create a GET route to the dashboard endpoint & post request to the login endpoint
router.route('/dashboard').get(authMiddleware, dashboard)
router.route('/login').post(login)

module.exports = router;

