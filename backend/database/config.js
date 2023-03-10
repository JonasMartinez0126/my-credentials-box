const mongoose = require("mongoose");

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Database is online");
    } catch (error) {
        console.log(error);
        throw new Error("It was an error to start database");
    }
}

module.exports = {
    dbConnection
}