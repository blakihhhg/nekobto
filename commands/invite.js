const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle('want to invite this bot to your server? :robot:')
    .addField('Link','[Click Here](https://discordapp.com/oauth2/authorize?client_id=562590481654218754&permissions=0&scope=bot)', true)
    .setColor("#ec0000")
    .setFooter('© Release | By: @xFuki#2551 | 2019')
    message.channel.send(embed)
}