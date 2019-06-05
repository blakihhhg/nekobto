const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let embed = new Discord.RichEmbed()
      .setAuthor(`${bot.user.username} Info`, bot.user.displayAvatarURL)
      .addField("➣ Bot Name:", "Neko Bot#6324", true)
      .addField("➣ Developer :", "****@xFuki#2551****", true)
      .addField("➣ Bot ID :", bot.user.id, true)
      .addField("➣ Channels :", bot.channels.size.toLocaleString(), true)
      .addField("➣ Guilds:", bot.guilds.size.toLocaleString(), true)
      .addField("➣ Users", bot.users.size.toLocaleString(), true)
      .addField("➣ Created At :", bot.user.createdAt, true)
      .addField("➣ Library :", "discord.js", true)
      .addField("➣ Prefix :", "-", true)
      .setImage(`https/cdn.discordapp.com/attachments/535567296060588042/542661612394250244/multicolours_1.gif`)
      .setThumbnail(bot.user.displayAvatarURL)
      .setColor("RANDOM")
      .setFooter("Bot Created By @xFuki#2551", bot.user.displayAvatarURL)
  message.channel.send(embed);
};
module.exports.config = {
    name: "botinfo",
    aliases: ["stats"]
}
 