const mongoose = require('mongoose');




const connectDB = async () => { return mongoose.connect('mongodb://localhost/contact_Mern')
    .this(console.log(`The connection to the mongoDB established...`))
    .catch(
        (err) => {
            return err
        }
    )
}

module.exports = connectDB;