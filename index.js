//Dependencies
const Netcat = require("netcat/client")

//Variables
const Netcat_Client = new Netcat()
const IPv4 = "" //Example: 192.168.0.62

//Main
Netcat_Client.addr(IPv4).port(8080).connect()

Netcat_Client.on("connect", function(data){
    console.log("Successfully connected to the server.")
})

Netcat_Client.on("close", function(data){
    console.log("Unable to connect to the server/the connection is closed.")
})

Netcat_Client.on("error", function(error){
    console.log(`Error detected: ${error.toString()}`)
})
