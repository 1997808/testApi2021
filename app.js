const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

//import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//middlewares
// app.use(auth)
// app.use('/posts', () => {
//     console.log('this is middleware running')
// })

//Routes
app.get('/', (req, res) => {
    res.send('We are on home')
})


//Connect to db
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connect to DB')
)

//Start listening
app.listen(3000)