const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({
        embed: {
            description: `Sorry, but you don't have permission to use this!`
        }
    })
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member) return message.channel.send({
        embed: {
            description: `Please, Enter Nickname Valid form this server!`
        }
    })
    var v=args.join(" ");
    message.delete().catch(O_o=>{}); 
    member.send(v)
}