const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("👤 Moderation")
    .addField("`" + message.prefix +"Ban`", "Ban a member.", true)
    .addField("`" + message.prefix +"Clear`", "Clear messages", true)
    .addField("`" + message.prefix +"Kick`", "Kick a member.", true)
    .addField("`" + message.prefix +"Mute`", "Temp Mute A Member", true)
    .addField("`" + message.prefix +"Purge`", "Clear Message", true)
    .addField("`" + message.prefix +"Warn`", "Warn a member.", true)
    .addField("`" + message.prefix +"Say`", "Default Say.", true)
    .addField("`" + message.prefix +"Saybd`", "Say Embed.", true)
    .addField("`" + message.prefix +"DM`", "Dm a Member.", true)
    .addField("`" + message.prefix +"Autorole`", "Autorole Command.", true)
    .addField("`" + message.prefix +"Welcome`", "Set Welcome Image.", true)
    .addField("`" + message.prefix +"Comming Soon`", "--------", true)
    .setFooter("Require mod-log channel.");
    message.channel.send(embed).then(msg => {msg.delete(15000)});
}