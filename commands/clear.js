const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({
        embed: {
            description: `${message.member}, No Can Do pal!`
        }
    })
    if(!args[0]) return message.channel.send({
        embed: {
            description: `${message.member}, Please specify a number.`
        }
    })
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`Cleared ${args[0]} messages.`).then(msg => msg.delete(2000));
    });
}