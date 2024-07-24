const { createServer } = require("http");
const app = require("./app");
const { Server } = require("socket.io");
var globals = require("./configs/globals");

const httpServer = createServer(app);

// making web socket server and put the httpServer on top of that
const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3000"
    }
});

require("./utils/io")(io);

// turn on the server
httpServer.listen(globals.ConnectionString.PORT, () => {
    console.log("Server listening on port", globals.ConnectionString.PORT);
});