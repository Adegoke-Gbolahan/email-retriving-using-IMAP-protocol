const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const mailRouter = require('./src/mail')

app.use(express.json())
app.use(mailRouter)
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

module.exports = app;