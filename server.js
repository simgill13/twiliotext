 const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const app = express();
app.use(bodyParser.json());
const path = require('path');
const PORT = process.env.PORT || 8080;


app.post('/textmsg', (req, res) => {
   res.status(200).json({msg: 'endpoint/textmsg'})
})

app.listen(PORT, () => console.log(` app listening on port ${PORT}!`))













