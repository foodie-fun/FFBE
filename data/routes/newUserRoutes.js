// These will be routes for handling new user experiences such as signing up for account
// or logging in or anything else that does not require a current user

const express = require('express');
const newUserRoutes = express.Router();
const db = require('../dbconfig.js');
const bcrypt = require('bcryptjs');
const { generateToken } = require('../middleware/middleware');



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
    console.log(username, password);

    if (!username || !password) {
        res.status(404).json({message: "Please provide all of the required fields!"})
    } else {
        db('users')
        .where({username})
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                let token = generateToken(user);

                res.status(200).json({message: "Success, have a token!", token})
            } else {
                res.status(500).json({message: "Invalid Credentials."})
            }
        })
        .catch(err => {
            res.status(500).json({ message: "Error getting user!" });
        })
    }

});

// TEST ROUTE
//---------------------------------------------------------------------------------//

newUserRoutes.get('/users', (req, res) => {
    db('users')
    .then(users => {
        res.status(200).json(users)
    })
    .catch(err => {
        res.status(500).json({message: "Error getting users!"})
    })

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