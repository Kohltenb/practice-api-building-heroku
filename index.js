require('dotenv').config()
const path = require('path')
const express = require('express')

const server = express()
const PORT = process.env.PORT || 8080;

server.use(express.json())

server.get('/api/user', (req, res) => {
    res.json([
        { id: 1, username: 'foo'},
        { id: 2, username: 'bar'},
        { id: 3, username: 'baz'}
    ])
})


server.listen(PORT, () => {
    console.log(`Listening on, ${PORT}!`)
})