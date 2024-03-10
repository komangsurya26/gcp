const express = require('express')

const app = express()


app.get('/', (req, res) => {
    res.send('Hello World!')
})

//listen
app.listen(process.env.PORT, () => console.log("Listening on port 3000"));