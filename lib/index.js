const arma3_be = require("arma3-be")
const cron = require("cron").CronJob

module.exports.Config = (Config) => {
    if (typeof Config !== "object") throw new Error("Config must be an object.")
    else {
        let Debug = false
        if (typeof Config.Debug === "boolean") {
            if (Config.Debug === true) Debug = true
        }
        Config.Commands.forEach((Command) => {
            new cron(Command.Time, function() {
                for (i = 0; i < Command.Amount; i++) {
                    arma3_be.SendCommand(Command.Command).then(() => {
                        if (Debug) console.log(`arma3-be-scheduler Has run a command at "${new Date()}". The command was "${Command.Command}".`);
                    })
                }
                
            }, null, true, Config.Timezone)
        })
    }
}