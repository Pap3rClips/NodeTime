const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {app.send('Racine');})
app.get('/about', (req, res) => {app.send('About me');})
app.listen(port, () => {console.log(`listening on port ${port}...`)})