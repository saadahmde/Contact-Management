const express = require('express');
const connectDB = require('./config/database')
const app = express();
const PORT = process.env.PORT || 8000;

// Middlewares
app.use(express.json()); // to send body data in json format



// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
})



// Server Configration
app.listen(PORT, async () => {
    try {
        await connectDB();
        console.log(`The server is running over http://localhost:${PORT}`)
    } catch (error) {
        return
    }
})