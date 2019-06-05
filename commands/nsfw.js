const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("NSFW")
    .setDescription("There are currently 5 commands in this category.")
    .addField("`" + message.prefix +"Neko`", "Get random neko image.", true)
    .addField("`" + message.prefix +"Boobs`", "Get random boobs image.", true)
    .addField("`" + message.prefix +"Ass`", "Get random ass image.", true)
    message.channel.send(embed).then(msg => {msg.delete(15000)});
}