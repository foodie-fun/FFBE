// These will be routes for handling new user experiences such as signing up for account
// or logging in or anything else that does not require a current user

const express = require('express');
const newUserRoutes = express.Router();
const db = require('../dbconfig.js');

//---------------------------------------------------------------------------------//

newUserRoutes.post('/', (req, res) => {


});

//---------------------------------------------------------------------------------//

newUserRoutes.get('/', (req, res) => {


});

// 
//---------------------------------------------------------------------------------//

newUserRoutes.put('/', (req, res) => {
   

});

// 
//---------------------------------------------------------------------------------//

newUserRoutes.delete('/', (req, res) => {

});

//---------------------------------------------------------------------------------//

module.exports = newUserRoutes;