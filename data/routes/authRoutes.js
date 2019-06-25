// The auth routes will handle requests that have a token after logging in 
// and confirming account information


const express = require('express');
const authRoutes = express.Router();
const db = require('../dbconfig.js');
const { authenticate, checkUserID } = require('../middleware/middleware');

// Add a review to the database, comment is optional
//---------------------------------------------------------------------------------//

authRoutes.post('/review', authenticate, (req, res) => {
    let { user_id, resname, restype, foodname, price, rating, imgURL } = req.body;

    if (user_id && resname && restype && foodname && price && rating && imgURL) {
        db('review')
            .insert(req.body)
            .then(id => {
                res.status(201).json({ message: "Post Successful!", id })
            })
            .catch(err => {
                res.status(500).json({ message: "Error adding review!" })
            })
    } else {
        res.status(500).json({ message: "Please provide all the required fields!" })

    }

});

// Get all reviews
//---------------------------------------------------------------------------------//

authRoutes.get('/review', authenticate, (req, res) => {
    db('review')
        .then(review => {
            res.status(200).json(review)
        })
        .catch(err => {
            res.status(500).json({ message: "Error getting review!" })
        })
});

// Get reviews by unique id
//---------------------------------------------------------------------------------//

authRoutes.get('/review/:id', authenticate, (req, res) => {
    const { id } = req.params;

    db('review')
        .where({ id })
        .first()
        .then(review => {
            res.status(200).json(review)
        })
        .catch(err => {
            res.status(500).json({ message: "Error getting review!" })
        })
});

// Get reviews using user_id
//---------------------------------------------------------------------------------//

authRoutes.get('/review/user/:id', authenticate, (req, res) => {
    const { id } = req.params;

    db('review')
        .where({user_id: id })
        .then(review => {
            res.status(200).json(review)
        })
        .catch(err => {
            res.status(500).json({ message: "Error getting review!" })
        })
});

// Edit a review using its unique id
//---------------------------------------------------------------------------------//

authRoutes.put('/review/:id', authenticate, (req, res) => {
    let { user_id, resname, restype, foodname, price, rating, imgURL } = req.body;

    if (user_id && resname && restype && foodname && price && rating, imgURL) {
        db('review')
            .where({ id: req.params.id })
            .update(req.body)
            .then(count => {
                if (count > 0) {
                    // return the count or the newly updated from database
                    db('review').where({ id: req.params.id }).first().then((review) => {
                        res.status(200).json({ review });
                    });
                } else {
                    res.status(500).json({ message: 'Action not found!' });
                }
            })
            .catch(err => {
                res.status(500).json({ message: "Error adding review!" })
            })
    } else {
        res.status(500).json({ message: "Please provide all the required fields!" })

    }

});

// Delete a review by its unique ID
//---------------------------------------------------------------------------------//

authRoutes.delete('/review/:id', authenticate, (req, res) => {

    db('review')
        .where({ id: req.params.id })
        .del()
        .then((count) => {
            if (count > 0) {
                res.status(200).json({ message: 'Destruction Imminent.' });
            } else {
                res.status(404).json({ message: 'Project not found!' });
            }
        })
        .catch((err) => {
            res.status(500).json({ message: "Error deleting review." });
        });
});

//---------------------------------------------------------------------------------//

module.exports = authRoutes;