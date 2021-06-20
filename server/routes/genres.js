const router = require('express').Router();
const Genre = require('../models/Genre');

router.post('/', async (req, res) => {
    const newGenre = new Genre(req.body);
    try {
        const savedGenre = await newGenre.save()
        res.status(200).json(savedGenre);
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/', async (req, res) => {
    try {
        const genre = await Genre.find();
        res.status(200).json(genre);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;