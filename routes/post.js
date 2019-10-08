const router = require('express').Router();
let Post = require('../models/post.model');

router.route('/').get((req, res) => {
    Post.find()
        .then(posts => res.json(posts))
        .catch(err => res.status(400).json('Error: '+ err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const message = req.body.message;
    const newPost = new Post({ name, message });

    newPost.save()
        .then(() => res.json('Post added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').delete((req, res) => {
//     Post.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Post deleted'))
//         .catch(err => res.status(400).json('Error: ' + err));
// })

module.exports = router;