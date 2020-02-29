const express = require('express');
let router = express.Router();

const Event = require('../models/event');

router.get('/', (req, res) => {
    Event.find().limit(10)
        .exec()
        .then(docs => {
            res.status(200).json(docs)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})

router.get('/page/:page', (req, res) => {
    const page = req.params.page;
    let pageSkip = page * 10;
    Event.find().limit(10).skip(pageSkip)
        .exec()
        .then(docs => {
            res.status(200).json(docs)
        })
        .catch(err => {
            res.status(500).json({ error: err })
        })
})

router.get('/speaker/:speaker', (req, res) => {
    Event.find().where({ main_speaker: req.params.speaker }).limit(10)
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                res.status(200).json(docs)
            } else {
                res.status(200).json({ error: "No Speaker found" })
            }
        })
})

router.get('/speaker/:speaker/:page', (req, res) => {
    const page = req.params.page;
    let pageSkip = (page * 10) - 10;
    Event.find().where({ main_speaker: req.params.speaker }).limit(10).skip(pageSkip)
        .exec()
        .then(docs => {
            if (docs.length > 0) {
                res.status(200).json(docs)
            } else {
                res.status(500).json({ message: "Reached the end of the page" })
            }
        })
})

module.exports = router;