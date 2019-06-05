const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle(":satellite:Core")
    .setDescription("There are currently 6 commands in this category.")
    .addField("`" + message.prefix +"Help`", "Show All Commands.", true)
    .addField("`" + message.prefix +"Info`", "Show Information Bot", true)
    .addField("`" + message.prefix +"Bugreport`", "Report a Bug .", true)
    .addField("`" + message.prefix +"Prefix`", "Change bot prefix.", true)
    .addField("`" + message.prefix +"Invite`", "Invite Bot To Your Server", true)
    .addField("`" + message.prefix +"Afk`", "Set Your Afk", true)
    message.channel.send(embed).then(msg => {msg.delete(15000)});
}