const router = require('express').Router();
const User = require('../models/User');
const Post = require('../models/Post');

//create
router.post('/', async (req, res) => {
    const newPost = new Post(req.body);
    try {
      const savedPost = await newPost.save();
      res.status(200).json(savedPost);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//update
router.put('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username) {

            try {
                const updatedPost = await Post.findByIdAndUpdate(
                    req.params.id, 
                    {
                    $set:req.body,
                    }, 
                    { new: true }
                );
                res.status(200).json(updatedPost);
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('Authorized to update your post only!');
        }
    } catch (err) {
        res.status(500).json(err)
    }
}); 

//delete
router.delete('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)
        if(post.username === req.body.username) {

            try {
                await post.delete()
                res.status(200).json('Post successfully deleted!');
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.status(401).json('Authorized to delete your post only!');
        }
    } catch (err) {
        res.status(500).json(err)
    }
}); 

//get
router.get('/:id', async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      res.status(200).json(post);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//all posts
router.get('/', async (req, res) => {
    const username = req.query.user;
    const genreName = req.query.genre;
    try {
        let posts;
        if (username) {
            posts = await Post.find({ username })
        } else if (genreName) {
            posts = await Post.find({
                genres: {
                $in:[genreName],
             },    
            });
        } else {
            posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;