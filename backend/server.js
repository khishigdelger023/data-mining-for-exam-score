const express = require('express')
// const mongoose = require("mongoose");
const Router = require("./routes")
const {MongoClient} = require('mongodb');
var bodyParser = require('body-parser')

const app = express()
const port = 3001

const muumagadlal = 16737/28414
const dundmagadlal = 10621/28414
const sainmagadlal = 1054/28414

const tuhainmuu = 6977/12043;
const tuhaindund = 4560/12043;
const tuhainsain = 506/12043;

const omnohmuu = 9760/16369
const omnohdund = 6061/16369
const omnohsain = 548/16369

const msongolthiisenmuu = 16021/27085 
const msongolthiisendund = 10089/27085
const msongolthiisensain = 975/27085

const msongolthiigeeguimuu = 716/1327 
const msongolthiigeeguidund = 532/1327
const msongolthiigeeguisain = 79/1327


const ermuu = 8637/15168
const erdund = 6025/15168
const ersain = 506/15168

const emmuu = 8100/13244
const emdund = 4596/13244
const emsain = 548/13244

const nomiinsantaimuu = 8901/16267
const nomiinsantaidund = 6570/16267
const nomiinsantaisain = 796/16267

const nomiinsanguimuu = 7836/12145
const nomiinsanguidund = 4051/12145
const nomiinsanguisain = 258/12145


const nomtsoonmuu = 14404/23043
const nomtsoondund = 8082/23043
const nomtsoonsain = 557/23043

const nom20muu = 1946/4334
const nom20dund = 2018/4334
const nom20sain = 370/4334

const nom100muu = 387/1035
const nom100dund = 521/1035
const nom100sain = 127/1035

const gazargantsaarchilsansain = 559/13904
const gazargantsaarchilsandund = 5561/13904
const gazargantsaarchilsanmuu = 7784/13904


const gazarsurgaltsain = 444/13394
const gazarsurgaltdund = 4674/13394
const gazarsurgaltmuu = 8276/13394

const gazarsurguulisain = 51/1114
const gazarsurguulidund = 386/1114
const gazarsurguulimuu = 677/1114

const bookbuhsain = 391/6694
const bookbuhdund = 2911/6694
const bookbuhmuu = 3392/6694

const booksurahsain = 196/7459
const booksurahdund = 2359/7459
const booksurahmuu = 49904/7459

const bookdadlagasain = 398/11995
const bookdadlagadund = 4573/11995
const bookdadlagamuu = 7024/11995

// app.use(bodyParser.urlencoded({ extended: false }))
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
// parse application/json
// app.use(bodyParser.json())
app.use(express.json());
const url = 'mongodb://127.0.0.1:27017'
const dbName = 'data-mine'
let db;
MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {
  if (err) return console.log(err)

  // Storing a reference to the database so you can use it later
  db = client.db(dbName)
  console.log(`Connected MongoDB: ${url}`)
  console.log(`Database: ${dbName}`)
})
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post("/data", async (request, response) => {

  const data = await db.collection('data').find().toArray();
  
  console.log(data)
  try {
    await user.save();
    response.send(user);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.post("/heh",urlencodedParser, async (req, res)=> {
let sain = sainmagadlal
let dund = dundmagadlal
let muu = muumagadlal
// let sain = 1
// let dund = 1
// let muu = 1;
console.log(req.body)
let values = req.body.values;
if(values.huis && values.huis=="er"){
sain = sain* ersain
dund=dund*erdund
muu=muu*ermuu
}
else if(values.huis && values.huis=="em"){
  sain = sain* emsain
  dund=dund*emdund
  muu=muu*emmuu
  }

if(values.mergejil &&  values.mergejil=="FALSE"){
  sain = sain*msongolthiigeeguisain
  dund = dund*msongolthiigeeguidund
  muu = muu*msongolthiigeeguimuu
}
else if(values.mergejil &&  values.mergejil=="TRUE"){
  sain = sain*msongolthiisensain
  dund = dund*msongolthiisendund
  muu = muu*msongolthiisenmuu
}

if(values.enom && values.enom == "dasgal"){
  sain = sain*bookdadlagasain
  dund = dund*bookdadlagadund
  muu = muu*bookdadlagamuu
}
else if(values.enom && values.enom == "bugd"){
  sain = sain*bookbuhsain
  dund = dund*bookbuhdund
  muu = muu*bookbuhmuu
}
else if(values.enom && values.enom == "nom"){
  sain = sain*booksurahsain
  dund = dund*booksurahdund
  muu = muu*booksurahmuu
}

if(values.esurgalt && values.esurgalt == "surguuli")
{
  sain = sain*gazarsurguulisain
  dund = dund*gazarsurguulidund
  muu = muu*gazarsurguulimuu
}
else if(values.esurgalt && values.esurgalt == "surgalt")
{
  sain = sain*gazarsurgaltsain
  dund = dund*gazarsurgaltdund
  muu = muu*gazarsurgaltmuu
}
else if(values.esurgalt && values.esurgalt == "davtlaga")
{
  sain = sain*gazargantsaarchilsansain
  dund = dund*gazargantsaarchilsandund
  muu = muu*gazargantsaarchilsanmuu
}

if(values.nom &&  values.nom=="FALSE"){
  sain = sain*nomiinsanguisain
  dund = dund*nomiinsanguidund
  muu = muu*nomiinsanguimuu
}
else if(values.nom &&  values.nom=="TRUE"){
  sain = sain*nomiinsantaisain
  dund = dund*nomiinsantaidund
  muu = muu*nomiinsantaimuu
}

if(values.ntoo && values.ntoo ==  "dund")
{
  sain = sain*nom20sain
  dund = dund*nom20dund
  muu = muu*nom20muu
}
else if(values.ntoo && values.ntoo ==  "tsoon")
{
  sain = sain*nomtsoonsain
  dund = dund*nomtsoondund
  muu = muu*nomtsoonmuu
}
else if(values.ntoo && values.ntoo ==  "olon")
{
  sain = sain*nom100sain
  dund = dund*nom100dund
  muu = muu*nom100muu
}


if(values.on && values.on == "omnoh")
{
sain=sain*omnohsain
dund=dund*omnohdund
muu=muu*omnohmuu
}
else if(values.on && values.on == "tuhain"){
sain=sain*tuhainsain
dund=dund*tuhaindund
muu=muu*tuhainmuu
}
let heh = {sain: sain,
dund: dund, muu:muu}

res.send(heh)
}
)
// app.post('/data', (req,res)=> {
//     // req
//     res.send('heh')
// } )
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})