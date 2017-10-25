const express = require('express')
const app = express()          //running the express function and is returning an app object
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/api/days/:day', function(req, res) {
  let day = req.params.day.toLowerCase()
  // res.send('Hello World!')
  res.set('Content-Type', 'text/plain')
  const daysOfWeek = {
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
    sunday: 7
  }
  if (daysOfWeek[day] === undefined) {
    res.status(400)
    res.send(`'${day}' is not a valid day!`)
  } else {
    res.status(200)
    res.send(daysOfWeek[day].toString())
  }

})

app.post('/api/array/concat', function(req, res) {

  const {array1, array2} = req.body
  res.set('Content-Type', 'text/plain')

  if (Array.isArray(array1) && Array.isArray(array2)) { //Array.isArray is preferred over instanceof because it works through iframes.
    const concatenation = array1.concat(array2) 
    res.status(200)
    res.send({concatenation})
  } else {
    res.status(400)
    res.send({"error": "Input is not an array"})
  }
})

app.listen(3000, function() {
  console.log('Listening on port 3000')
})
