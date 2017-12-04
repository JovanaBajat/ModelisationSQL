const express = require('express')

module.exports = express.Router()
.get('/cards', (req, res) => {
  res.send("caca cards")
})