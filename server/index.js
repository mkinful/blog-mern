const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const postRoute = require('./routes/posts');
const genreRoute = require('./routes/genres');

dotenv.config();
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, '/images')))

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
    }, filename:(req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({ storage:storage });
app.post('/server/upload', upload.single('file'), (req, res) => {
    res.status(200).json('File uploaded successfully');
});

app.use('/server/auth', authRoute);
app.use('/server/users', usersRoute);
app.use('/server/posts', postRoute);
app.use('/server/genres', genreRoute);

app.listen('5000', ()=> {
    console.log('Connection Successful');
});