const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("🎍 Statistics")
    .addField("`" + message.prefix +"Uptime`", "Provides bot's statistics.", true)
    .addField("`" + message.prefix +"Profile`", "Provide user statistics", true)
    .addField("`" + message.prefix +"Serverinfo`", "Provide server statistics.", true)
    .addField("`" + message.prefix +"Serverrole`", "Display Server Roles", true)
    message.channel.send(embed).then(msg => {msg.delete(15000)});
}