// These will be routes for handling new user experiences such as signing up for account
// or logging in or anything else that does not require a current user

const express = require('express');
const newUserRoutes = express.Router();
const db = require('../dbconfig.js');
const bcrypt = require('bcryptjs');
const {generateToken} = require('../middleware/middleware');


// Routes for /api/new
//---------------------------------------------------------------------------------//

newUserRoutes.post('/register', (req, res) => {
    let { username, password } = req.body;
    const user = req.body;

    if (username && password) {
        const hash = bcrypt.hashSync(user.password, 10);
        user.password = hash;

        console.log(hash)

        db('users')
            .insert(user)
            .then(ids => {
                console.log(ids);
                const [id] = ids;

                db('users')
                    .where({ id })
                    .first()
                    .then(user => {
                        res.status(200).json({ message: `Welcome ${user.username}!`})
                    })
                    .catch(err => {
                        res.status(404).json({ message: "User could not be found!" })
                    })
            })
            .catch(err => {
                res.status(404).json({ message: "Error finding user info." })
            })

    } else {
        res.status(500).json({ message: "Please provide credentials!" });
    }



});

//---------------------------------------------------------------------------------//

newUserRoutes.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username && password) {

        db('users')
            .where({ username })
            .first()
            .then(user => {
                if (user && bcrypt.compareSync(password, user.password)) {
                    const token = generateToken(user);
                    console.log(token)

                    res.status(200).json({ message: "Success!", token });

                } else {
                    res.status(500).json({ message: "Login Failure"})
                }
            })
            .catch(err => {
                res.status(404).json({ message: "That user could not be found!" })
            })

    } else {
        res.status(500).json({ message: "Please provide the correct credentials!" })
    }

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