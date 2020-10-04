const mongoose = require("mongoose");


const connectToMongoDB = async () => {

    const connect = await mongoose.connect(process.env.MONGO_URI, {
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
        useNewUrlParser: true
    })

    console.log(`\nConnection to Mongodb successfull ${connect.connection.host}`.yellow.underline)

}

module.exports = connectToMongoDB;