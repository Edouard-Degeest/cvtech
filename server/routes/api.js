const express = require('express')
const jwt = require('jsonwebtoken')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = "mongodb+srv://Edouard2135:Degeest2135@cvtech.m7z4g.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(db, err => {
    if (err) {
        console.error('Error!' + err)
    } else {
        console.log('Connected to mongodb')
    }
})


router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/register', (req, res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((error, registeredUser) => {
        if (error) {
            console.log(error)
        }else {
            let payload = { subject: registeredUser._id }
            let token = jwt.sign(payload, 'secretKey')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body

    User.findOne({email: userData.email}, (error, user) => {
        if (error) {
            console.log(error)
        }else {
            if(!user) {
                res.status(401).send('Invalid email')
            } else
            if (user.password !== userData.password) {
                res.status(401).send('invalid password')
            }else {
                let payload = { subject: user._id }
                let token = jwt.sign(payload, 'secretKey')
                res.status(200).send({token})
            }
        }
    })
})

router.get('/events', (req, res) => {
    let events = [ 
        {
        "_id": "3",
    "name": "auto expo",
    "description": "lorem ipsum",
    "date": "2001-10-23"
        }
    ]
    res.json(events)
})

router.get('/special', (req, res) => {
    let events = [ 
        {
        "_id": "3",
    "name": "auto expo",
    "description": "lorem ipsum",
    "date": "2001-10-23"
        }
    ]
    res.json(events)
})


module.exports = router