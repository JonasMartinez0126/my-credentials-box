const express = require("express");
const cors = require("cors");


class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        // paths
        this.paths = {
            auth: '/api/auth'
        }

        // connect to database
        // middlewares
        // app routes
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log("Server is running on Port:", this.port);
        });
    }
}

module.exports = Server;