'use strict';

const axios = require('axios');

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { application, response } = require('express');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;


// ---- get ----

app.get('/doodles/:year/:month', async (req, res) => {
    try{
        let result = await axios.get(`https://www.google.com/doodles/json/${req.params.year}/${req.params.month}`);
        console.log(result.data);
        res.status(200).json(result.data);
    } catch( err ) {
        res.status(500).send('Server issue in .get');
    }
});

app.listen(PORT, () => console.log(`listening on ${PORT}`));