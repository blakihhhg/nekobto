const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({
        embed: {
            description: `Sorry, but you don't have permission to use this!`
        }
    }) 
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
    return message.channel.send({
        embed: {
            description: `Please mention a valid member of this server`
        }
    });
    if(!member.kickable) 
    return message.channel.send({
        embed: {
            description: `I cannot kick this user! Do they have a higher role? Do I have kick permissions?`
        }
    });
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";
    await member.kick(reason)
    .catch(error => message.channel.send({
        embed: {
            description: `Sorry ${message.author} I couldn't kick because of : ${error}`
        }
    }));
    message.channel.send({
        embed: {
            description: `${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`
        }
    });
    message.delete().catch(O_o=>{}); 
}