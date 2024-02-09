const mongoose = require('mongoose');


const connectDB = async () => {
    return mongoose
    .connect('mongodb+srv://SaadAhmed:1234567890@projectkit.l3tqm1r.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log(`Connection to the database established...`))
    .catch((err) => console.log(err))
}

module.exports = connectDB;