const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .addField(`Roles List: [${message.guild.roles.size}]`, `${message.guild.roles.map(roles => roles).join(' \n ')}`, true)
    message.channel.send(embed)
}