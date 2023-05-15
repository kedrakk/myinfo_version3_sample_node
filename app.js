const express = require('express');
const path = require('path');
const config = require('./config/config.js');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const cors = require('cors');
const crypto = require('crypto');
var MyInfoConnector = require('myinfo-connector-nodejs');

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(cors());

app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'pug');

app.use(express.static(path.resolve(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cookieParser());

app.get('/je/callback', function (req, res) {
  res.sendFile(__dirname + '/public/view/index.html');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/view/index.html');
});


app.get('/getEnv', function (req, res) {
    try {
        if (config.APP_CONFIG.DEMO_APP_CLIENT_ID == undefined || config.APP_CONFIG.DEMO_APP_CLIENT_ID == null) {
            res.status(500).send({
                "error": "Missing Client ID"
            });
        } else {
            res.status(200).send({
                "clientId": config.APP_CONFIG.DEMO_APP_CLIENT_ID,
                "redirectUrl": config.APP_CONFIG.DEMO_APP_CALLBACK_URL,
                "attributes": config.APP_CONFIG.DEMO_APP_SCOPES,
                "purpose": config.APP_CONFIG.DEMO_APP_PURPOSE,
                "authApiUrl": config.APP_CONFIG.MYINFO_API_AUTHORISE,
            });
        }
    } catch (error) {
        console.log("Error".red, error);
        res.status(500).send({
            "error": error
        });
    }
});

app.post('/getPersonData', function (req, res, next) {
  
    try {
      var authCode = req.body.authCode;
      var state = req.body.state;
      var branchCode = req.body.branchCode;
      var txnNo = crypto.randomBytes(10).toString("hex");
      var myinfoConfig = config.MYINFO_CONNECTOR_CONFIG(branchCode);
      let connector = new MyInfoConnector(myinfoConfig);
      console.log("Calling MyInfo NodeJs Library...".green);
  
      connector.getMyInfoPersonData(authCode, state, txnNo)
        .then(personData => {
          res.status(200).send(personData); //return personData
        })
        .catch(error => {
          res.status(500).send({
            "error": error
          });
        });
    } catch (error) {
      console.log("Error".red, error);
      res.status(500).send({
        "error": error
      });
    }
  });

app.listen(PORT,() => {
    console.log(`Server listening on ${PORT}`);
})