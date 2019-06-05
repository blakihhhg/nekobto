const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(bUser === message.author) return message.channel.send({
        embed: {
            description: `Are you retarded? Why do you want to ban yourself?`
        }
    })
    if(!bUser) return message.channel.send({
        embed: {
            description: `Can't find user!`
        }
    })
    let bReason = args.join(" ").slice(22);
    if(!bReason) return message.channel.send({
        embed: {
            description: `Please provide a reason!`
        }
    })
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send({
        embed: {
            description: `<:no_entry_sign:432418492667396097> **| You don't have __BAN_MEMBERS__ permissons.**`
        }
    })
    let banEmbed = new Discord.RichEmbed()
    .setDescription("Ban")
    .setColor("#bc0000")
    .addField("User", bUser.user.tag)
    .addField("Moderator", message.author.tag)
    .addField("Reason", bReason)
    .setTimestamp()
    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send({
        embed: {
            description: `<:x:432418492667396097> **| Can't find __mod-log__ channel.**`
        }
    })
    let embed = new Discord.RichEmbed()
    .setTitle("BAN")
    .addField("Banned In", message.guild.name)
    .setColor("#bc0000")
    .addField("Moderator", message.author.tag)
    .addField("Reason", bReason)
    bUser.send(embed);
    message.channel.send({
        embed: {
            description: `<:white_check_mark:432418492889694210> **| That member has been banned.**`
        }
    })
    bUser.ban(bReason)
    incidentchannel.send(banEmbed);
}