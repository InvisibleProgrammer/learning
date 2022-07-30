const express = require('express')

const PORT = process.env.port || 8080

const app = express()

app.get('/api', (req, res) => {
    res.json({ message: "Hello from server!"})
})

app.listen(PORT, () => {
    console.log(`Server listens at port ${PORT}`)
})



