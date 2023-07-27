const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
//var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/login', jsonParser, function (req, res) {
  let userName = req.body.username.replace(' ', '').toLowerCase();
  console.log(userName);
  switch(userName) {
    case "imadmajid":
      res.send('Well done ' + req.body.username + '\nThe QA Postman himself')
      break;
    case "mohammadarif":
      res.send('Welcome, \nWell done! ' + req.body.username)
      break;
    case "martintyler":
      res.send('Well done ' + req.body.username + '\nDJ Tyler - automating mixes')
      break;
    case "jackbristow":
      res.send('Well done ' + req.body.username + '\nThe Bosstrow - Right, time to get back to work!')
      break;
    case "ramyasampath":
      res.send('Well done ' + req.body.username + '\nA true legend in the making')
      break; 
    case "alexandracernescu":
      res.send('Well done ' + req.body.username + '\nAlways on fire!')
      break; 
    case "pratikbrahmapurkar":
      res.send('Well done ' + req.body.username + '\nThe Yoga Master')
      break; 
    case "thomasabraham":
      res.send('Well done ' + req.body.username + '\nDon\'t forget your protein shake')
      break; 
    case "halynakustova":
      res.send('Well done ' + req.body.username + '\nThe quizmaster!')
      break;
    case "karolmorales":
      res.send('Well done ' + req.body.username + '\nKick Ass Karol indeed')
      break;
    case "michaelsobowale":
      res.send('Well done ' + req.body.username + '\nWelcome...to the real world')
      break;
    case "mitchelwemah":
      res.send('Well done ' + req.body.username + '\nDid somebody say regression? ...I got this')
      break;
    default:
      res.send('Check your full name is correct (and check you havent been fired)')
  }
  // {
  //   res.send('Welcome, \nWell done! ' + req.body.username)
  // }
})

// POST /api/users gets JSON bodies
// app.post('/api/users', jsonParser, function (req, res) {
//   // create user in req.body
// })

//parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

app.get('/fxqa', (req, res) => {
  res.send('Hello FX QA team! You are awesome!\nNow can you create a POST request to the endpoint /login with your full "username" as Body\n\nRun a new GET request from the endpoint /hint to find out how to do it')
  //console.log(req.body)
})

app.get('/hint', (req, res) => {
  res.send('There is nothing in here mate! Just kidding.\n\nAdd the "username" as a JSON under Body. In Body select raw and change this to JSON.\nWrite a proper JSON for your "username" and set the value to your "full name" he Notion page (copy/paste the URL into your browser):\n\nCreate a new POST request and change the endpoint to /login')
  //console.log(req.body)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})