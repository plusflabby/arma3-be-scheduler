# arma3-be-scheduler

## Requirements
1. [Node.JS](https://nodejs.dev/)
2. NPM - This is installed by defualt with Node.JS
3. [arma3-be](https://www.npmjs.com/package/arma3-be)

## Installation
1. Run the command `npm 1 --save arma3-be-scheduler`
2. Done! Now to configure.

## Configuration
### Package
This will load the package to be used in your code. <br />
Add this to the top of your file.
```javascript
const arma3_be_scheduler = require("arma3-be-scheduler")
```
### Config
The config sets your timezone and the commands you want to be sent to your server. <br />
Add this to your file and change the values.
```javascript
arma3_be_scheduler.Config({
    "Debug": true,
    "Timezone": "America/New_York",
    "Commands": [
        {
            "Command": "say -1 Hello World!", //This will global messages everyone on the server with Hello World!
            "Amount": 1, //This will send the command one time
            "Time": "* * * * *" //To run the command every minute (1:01am, 1:02am, 1:03am, etc..)
        }
    ],
})
```

## Functions
### arma3_be_scheduler.Config(Config)
This function configures your scheduler setup. <br />
The function's parameter must be an object.
#### Parameter Object
- "Debug" (true or false) - True will console log every time a command is run
- "Timezone" (string) - This is the timezone you want to use. (Useful map to find your timezome [map](https://momentjs.com/timezone/))
- "Commands" (array of objects) - This array is for each command you want to send to your server.<br />
    Each object must have the following values.
    - "Command" (string) - The battleye server command you want to send
        - Useful [website](https://www.battleye.com/support/documentation/) to find commands
    - "Amount" (number) - How many times you want the command to be run
    - "Time" (string) - The cron time to run the command
        - There must be 5 inputs for minutes, hours, days, months, weeks
        - Useful [website](https://crontab.guru/) to figure out the time