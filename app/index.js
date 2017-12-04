
const express = require('express');
const list = require ('./controllers/list.js')
const cards = require ('./controllers/cards.js')
const users = require ('./controllers/users.js')


const app = express();


// app.get('/*', (req, res) => {
//     res.send('je suis l\'interceptor')
// })

app.use(express.json())

app.use('/', list, cards, users)


app.all('/*', (req, res) => {
    res.status(404).send('je suis l\'interceptor')
})


app.listen(3000, () => {
    console.log("the app is listening on the port 3000")
});