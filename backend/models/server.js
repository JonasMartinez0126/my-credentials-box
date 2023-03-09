const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // paths
        this.paths = {
            auth: '/api/auth'
        }

        // connect to database
        this.dbConnect();
        // middlewares
        // app routes
    }

    async dbConnect() {
        await dbConnection()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server is running on Port:", this.port);
        });
    }
}

module.exports = Server;