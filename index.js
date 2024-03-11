const express = require('express')
const app = express()
require('dotenv').config()


app.get('/', (req, res) => {
    return res.send('Hello World!')
})

app.get('/', (req, res) => {
    const {alamat} = req.query
    return res.send(alamat);
})

//listen2
//listen
app.listen(process.env.PORT, () => console.log("Listening on port 3000"));