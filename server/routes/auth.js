const router = require('express').Router();
const User = require('../models/User');
const bycrpt = require('bcrypt');

//register
router.post('/register', async (req, res)=> {
    try {
        const salt = await bycrpt.genSalt(10);
        const hashedKey = await bycrpt.hash(req.body.password, salt);
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedKey,
        });
        
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
})

//login
router.post('/login', async (req, res)=> {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(400).json('Invalid credentials!');

        const validated = await bycrpt.compare(req.body.password, user.password);
        !validated && res.status(400).json('Invalid credentials!');

        const {password, ...logged } = user._doc;
        res.status(200).json(logged);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;