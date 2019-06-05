const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("🙇 Developer")
    .addField("`" + message.prefix +"Eval`", "Execute a JavaScript.", true)
    .addField("`" + message.prefix +"Restart`","Restart the bot", true)
    .addField("`" + message.prefix +"Reload`","Reload all commands.", true)
    message.channel.send(embed).then(msg => {msg.delete(15000)});
}