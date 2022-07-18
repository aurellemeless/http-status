const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()
const port = process.env.PORT;

app.use(cors())


app.get('/', (req, res) => {
  res.send('Status checker')
})

app.get('/status/:code', (req, res) => {
  res.statusCode = req.params.code;
  res.send({code: req.params.code, message : 'xxxx'});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})