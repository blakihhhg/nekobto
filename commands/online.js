const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("online")
    .setDescription("Server Offline!`")
    .addField("`" + message.prefix +"http://status.mclive.eu/SpiritNetwork/Mt.com/25565/banner.png`", "Connect now in: Coming Soon", true)
    message.channel.send(embed).then(msg => {msg.delete(15000)});
}