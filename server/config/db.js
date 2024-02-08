const mongoose = require('mongoose');



const connectDB = async () => {
    return mongoose
    .connect('mongodb+srv://SaadAhmed:SaadAhmed@projectkit.l3tqm1r.mongodb.net/?retryWrites=true&w=majority')
    .then(() => console.log(`connectino to the database established`))
    .catch((err) =>  console.log(err))
}

module.exports = connectDB;