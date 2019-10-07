const mongoose = require('mongoose');
const moment = require('moment');

const utcDate = moment.utc().toDate();

const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3
    },
    message: {
        type: String,
        required: true
    }
}
, {
    timestamps: true,
}
);

const Post = mongoose.model('Post', postSchema);

module.exports = Post;