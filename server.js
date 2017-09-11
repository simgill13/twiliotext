 const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const app = express();
app.use(bodyParser.json());
const path = require('path');
const {bar,order} = require('./model');
const {PORT, DATABASE_URL} = require('./config');








app.post('/textmsg', (req, res) => {
 console.log('=================HIT==============')
 console.log(req.body.text)


 var string = req.body.text





var accountSid = 'AC930c602a19415f6adcfd5ea6b65e0aa1'; 
var authToken = 'b746baf812b466659e94d45e638836f3'; 
 
//require the Twilio module and create a REST client 
var client = require('twilio')(accountSid, authToken); 
 
client.messages.create({ 
    to: "+14086130163", 
    from: "+18312788173", 
    body: string , 
}, function(err, message) { 
    console.log(message.sid); 
});


   res.status(200).json({msg: 'this is working'})
})




























let server;
function runServer(databaseUrl=DATABASE_URL, port=PORT) {

  return new Promise((resolve, reject) => {
    mongoose.connect(databaseUrl, err => {
      if (err) {
        return reject(err);
      }
      server = app.listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve();
      })
      .on('error', err => {
        mongoose.disconnect();
        reject(err);
      });
    });
  });
}

function closeServer() {
  return mongoose.disconnect().then(() => {
     return new Promise((resolve, reject) => {
       console.log('Closing server');
       server.close(err => {
           if (err) {
               return reject(err);
           }
           resolve();
       });
     });
  });
}



if (require.main === module) {
  runServer().catch(err => console.error(err));
};

module.exports = {app, runServer, closeServer};


















