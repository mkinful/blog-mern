const express = require('express');
const app = express();

app.use('/', (req, res) => {
    console.log('testing');
})

app.listen('5000', () => {
    console.log('Connection Succesful.');
})