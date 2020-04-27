const express = require('express');
const bodyParser = require('body-parser');
const IgClient = require('./ig-client');


const N_PICS = 10;
const DEFAULT_PORT = 4000;

const igClient = new IgClient();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/getpics', async(req, res, next) => {
    const imageUrls = await igClient.getPictures(N_PICS);
    res.json({imageUrls: imageUrls});
});

const port = process.argv[2] || DEFAULT_PORT;
app.listen(port, () => {
    console.log(`Server running on Port ${port}`);
});
