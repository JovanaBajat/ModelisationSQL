const express = require('express')

module.exports = express.Router()
.get('/users', (req, res) => {
  res.send("caca users")
})