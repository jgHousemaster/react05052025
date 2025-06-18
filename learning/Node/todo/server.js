const express = require('express')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: true}))
app.use(express.json())

const todoRouter = require("./routes/todo")
app.use("/todos", todoRouter)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, (req, res) => {
    console.log("Server running on port", port)
})