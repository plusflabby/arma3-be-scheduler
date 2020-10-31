/* Get the library for arma3-be-scheduler */
//Your local code should be = const arma3_be_scheduler = require("arma3-be-scheduler")
const arma3_be_scheduler = require("../lib/index")
const arma3_be = require("arma3-be")

//Set battleye config and attempt rcon connection
arma3_be.Config({
    IP: "127.0.0.1",
    Port: "2306",
    Password: "testpassword",
    Debug: true,
    RetryOnFailedAttempt: true
})

//Set config and start scheduler
arma3_be_scheduler.Config({
    "Debug": true,
    "Timezone": "America/New_York",
    "Commands": [
        {
            "Command": "say -1 Hello World!", //This will global messages everyone on the server with Hello World!
            "Amount": 1, //This will send the command one time
            "Time": "* * * * *" //To run the commands every minute (1:01am, 1:02am, 1:03am, etc..)
        },

        {
            "Command": "say -1 Hello Again World!", //This will global messages everyone on the server with Hello Again World!
            "Amount": 2, //This will send the command two times
            "Time": "* */2 * * *" //To run the commands every 2 minutes (1:02am, 1:04am, 1:06am, etc..)
        },
        
        {
            "Command": "update", //This will check for a battleye update
            "Amount": 1, //This will send the command one time
            "Time": "* 0 * * *" //To run the command every hour (1am, 2am, 3am, etc..)
        }
    ],
})