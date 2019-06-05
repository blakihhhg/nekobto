const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("🔱 Utilities")
    .addField("`" + message.prefix +"Ascii`", "Generate ascii text.", true)
    .addField("`" + message.prefix +"Avatar`", "Show Avatar member.", true)
    .addField("`" + message.prefix +"Autonick`","Autonick.", true)
    .addField("`" + message.prefix +"Autonick Off`", "Turn Off Autonick.", true)
    .addField("`" + message.prefix +"Autonick On`", "Turn On Autonick.", true)
    .addField("`" + message.prefix +"Autonick Previous`", "Show Autonick Previous", true)
    .addField("`" + message.prefix +"Ping`", "Check Your HeartBeat.", true)
    .addField("`" + message.prefix +"Coins`", "Show Your Coins", true)
    .addField("`" + message.prefix +"Level`", "Show Your Level.", true)
    message.channel.send(embed).then(msg => {msg.delete(15000)});
}