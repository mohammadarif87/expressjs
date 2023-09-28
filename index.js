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
    case "user1":
      res.send('Well done ' + req.body.username + '\nQUOTE')
      break;
    case "user2":
      res.send('Welcome, \nWell done! ' + req.body.username)
      break;
    case "user3":
      res.send('Well done ' + req.body.username + '\nQUOTE')
      break;
    case "user4":
      res.send('Well done ' + req.body.username + '\nQUOTE')
      break;
    case "user5":
      res.send('Well done ' + req.body.username + '\nQUOTE')
      break; 
    case "user6":
      res.send('Well done ' + req.body.username + '\nQUOTE')
      break; 
    case "user7":
      res.send('Well done ' + req.body.username + '\nQUOTE')
      break; 
    case "user8":
      res.send('Well done ' + req.body.username + '\nQUOTE')
      break; 
    case "user9":
      res.send('Well done ' + req.body.username + '\nQUOTE')
      break;
    case "user10":
      res.send('Well done ' + req.body.username + '\nQUOTE')
      break;
    case "user11":
      res.send('Well done ' + req.body.username + '\nQUOTE')
      break;
    case "user12":
      res.send('Well done ' + req.body.username + '\nQUOTE')
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
