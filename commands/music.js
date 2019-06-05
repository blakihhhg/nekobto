const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Music")
    .setDescription("There are currently 10 commands in this category.\n`The default prefix will remain.`")
    .addField("`" + message.prefix +"Play`", "Play url", true)
    .addField("`" + message.prefix +"Np`", "Show Playing Right Now", true)
    .addField("`" + message.prefix +"Stop`", "Stop Song", true)
    .addField("`" + message.prefix +"Queue`", "Shows the queue.", true)
    .addField("`" + message.prefix +"Volume`", "Set Volume.", true)
    .addField("`" + message.prefix +"Resume`", "Resume Song.", true)
    .addField("`" + message.prefix +"Pause`", "Pause Song.", true)
    .addField("`" + message.prefix +"Join`", "Bot Join Your Room.", true)
    .addField("`" + message.prefix +"Leave`", "Bot Leave Your Room.", true)
    .addField("`" + message.prefix +"Skip`", "Skips the Song.", true)
    message.channel.send(embed).then(msg => {msg.delete(15000)});
}