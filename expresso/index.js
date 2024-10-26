const express = require("express")
const app = express()
const port = 3000

app.get('/', (req,res) => {
    res.send('Racine')
})

app.get('/about', (req, res) => {
    res.send('About me')
})

app.listen(port, () => {
    console.log("going ...")
})