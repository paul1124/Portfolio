const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 3,
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

// postSchema.plugin(timeZone);
const Post = mongoose.model('Post', postSchema);

module.exports = Post;