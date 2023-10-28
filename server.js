const express = require('express');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => res.json({
    msg: 'Welcome to the contac management system'
}));

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/contacts'));
app.use('/api/contacts', require('./routes/auth'));

const PORT = 5000;

app.listen(PORT, () => {
    console.log('PORT is listening', PORT);
});

