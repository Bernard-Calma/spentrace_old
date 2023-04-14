const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const session = require('express-session')

// ----- MIDDLEWARES -----
app.use(express.static(path.join(__dirname + "public")))
app.use(cors({
    credentials: true,
    option: ['http://localhost:3000']
}))
// ----- END OF MIDDLEWARES -----
const PORT = process.env.PORT || 8000

app.get('/', (_, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Server is now running at Port: ${PORT}`)
})