const Discord = require("discord.js")
const BotConfiguration = require("bot_configuration.json")

const bot = new Discord.Client()

bot.on("ready", () => {
    bot.application.commands.create({ name: "post", description: "Post something on " + BotConfiguration.site, options: [ { name: "title", description: "The post title", type: "STRING", required: true }, { name: "post_text", description: "The post text", type: "STRING", required: true } ] })
    console.log("[i] Started DiscordPost bot")
})

bot.on("interaction", interaction => {
    if (!interaction.isCommand()) return
    if (interaction.commandName === "post") {
        // WIP ;)
    }
})

bot.login(BotConfiguration.bot_token)
