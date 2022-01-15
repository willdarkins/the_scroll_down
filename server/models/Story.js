const { Schema } = require('mongoose');

// subdocument schema for users to save stories
const storySchema = new Schema({
    storyId: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    link: {
        type: String
    },
    image: {
        type: String
    },
    publishDate: {
        type: String,
        required: true
    }
});

module.exports = storySchema;