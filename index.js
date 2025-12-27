const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 3003

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send("coffee server is becoming warmer");
})

app.listen(port, ()=>{
    console.log(`the server is running on port : ${port}`);
})

