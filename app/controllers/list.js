const express = require('express')
const model = require('../model/list')

const db = require('../model/db')


const router = express.Router()

router.get('/list', async (req, res) => {

    try {
        res.json(await model.getLists())
    } catch (err) {
        res.json(err)
    }

    // model.getLists()
    // .then(result => res.json(result))
    // .catch(err => res.json(err))
})

router.post('/list', (req, res) => {

    model.createList( req.body.name )
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.put('/list', (req, res) => {
    model.updateList (req.body.name, req.body.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.delete('/:id', (req, res) => {
    model.deleteList (req.params.id)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
 
module.exports = router