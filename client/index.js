const express = require('express');
const cors = require('cors');
const router = require('./router');
const path = require('path');
const https = require('https');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
app.use(cors());
const port = 3001;

app.use(bodyParser.json());

app.use("/api", router);
app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
