const express = require('express')
const app = express()
const port = 3200

app.get('/', function (req, res) { // vijay-website.com
  res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Example app list at http://localhost:${port}`)
})
