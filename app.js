const Moment = require('moment');
const CryptoJs = require('crypto-js');
const BodyParser = require('body-parser');
const Express = require('express')
const app = Express()

const port = process.env.PORT || 3000;

const log = function(request, response, next) {
  console.info(`${request.method} ${request.originalUrl}`);
  next();
}

app.use(BodyParser.json());
app.use(log);


app.post('/', function(request, response) {
  const token = request.body.token;
  const site1 = request.body.site1;
  const site2 = request.body.site2;

  if (!token || !site1 || !site2) {
    response.status(400).send({error: "One of the paramters was null or invalid."});
  }

  const key = CryptoJs.MD5(token + site1 + site2);
  const date = Moment().utc().format("Y-MM-DDHH");
  const transfer_token = CryptoJs.MD5(key + date).toString();

  response.status(200).send({token: transfer_token});
});

app.listen(port);
