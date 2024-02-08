const express = require('express');
const morgan = require('morgan');
const connectDB = require('./config/db')



const app = express();


// middleware
app.use(express.json());
app.use(morgan('tiny'));

// routes
app.get('/' , (req, res) => {
    res.send('Hello World!')
})

// server configrations
const PORT = process.env.PORT || 8000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`The server is listening to the http://localhost:${PORT}`)
})