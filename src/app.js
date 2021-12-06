const cowsay = require('cowsay')
const express = require('express')

const app = express()

const port = 3000

app.get('/cowsay', (req, res) => {
    text = req.query.message
    if(!text){
        return res.send({
            error: 'Por favor especifica un mensaje'
        })
    }

    res.send(cowsay.say({
        text,
        e: "O O",
        T: "U"
    }))
})


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})