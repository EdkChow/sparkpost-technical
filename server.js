const express = require('express');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.status(200).send('Helloooo');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
