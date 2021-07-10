//Dependencies
const Netcat = require("netcat/server")

//Variables
const Netcat_Server = new Netcat()

//Main
Netcat_Server.port(8080).listen()
Netcat_Server.on("ready", function(){
    console.log("Server running in port 8080.")
})
