const express = require('express');
const app = express();
const dotenv = require('dotenv');
const multer = require('multer');
const mongoose = require('mongoose');
const authRoute = require('./routes/auth');
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const genreRoute = require('./routes/genres');

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
})
    .then(console.log('MongoDB Connected'))
    .catch(err=>console.log(err));

    const storage = multer.diskStorage({
        destination:(req, file, cb) => {
            cb(null, 'images')
        }, 
        filename:(req, file, cb) => {
            cb(null, req.body.name);
        },
    });

    const upload = multer({ storage:storage });
    app.post('/backend/upload', upload.single('file'), (req, res) => {
        res.status(200).json('File uploaded successfully!');
    })

    app.use('/backend/auth', authRoute);
    app.use('/backend/users', userRoute);
    app.use('/backend/posts', postRoute);
    app.use('/backend/genres', genreRoute);

app.listen('5000', () => {
    console.log('Connection Succesful.');
})