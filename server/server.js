const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db')


const app = express();


// middlewares
app.use(express.json()) // to send body data in json format
app.use(morgan('tiny'))


// routes
app.get('/', (req, res) => {
    res.send('Hello world!')
})



// server configration
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`The server is listening to the http://localhost:${PORT}`)
    } catch (error) {
        return error
    }
})