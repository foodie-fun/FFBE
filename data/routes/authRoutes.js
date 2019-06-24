// The auth routes will handle requests that have a token after logging in 
// and confirming account information


const express = require('express');
const authRoutes = express.Router();
const db = require('../dbconfig.js');
const {authenticate} = require('../middleware/middleware');


//---------------------------------------------------------------------------------//

authRoutes.post('/', (req, res) => {


});

//---------------------------------------------------------------------------------//

authRoutes.get('/', (req, res) => {


});

// 
//---------------------------------------------------------------------------------//

authRoutes.put('/', (req, res) => {
   

});

// 
//---------------------------------------------------------------------------------//

authRoutes.delete('/', (req, res) => {

});

//---------------------------------------------------------------------------------//

module.exports = authRoutes;