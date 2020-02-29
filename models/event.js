const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({
    description: String,
    event: String,
    main_speaker: String,
    name: String,
    published_date: Number,
    ratings: String,
    related_talks: String,
    speaker_occupation: String,
    tags: String,
    title: String,
    url: String,
    views: Number
})

module.exports = mongoose.model('Event', eventSchema);