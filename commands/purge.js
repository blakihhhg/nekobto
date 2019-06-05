const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const deleteCount = parseInt(args[0], 10);
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({
        embed: {
            description: `${message.member}, Sorry, but you don't have permission to use this!`
        }
    })
    if(!deleteCount || deleteCount < 2 || deleteCount > 500)
    return message.channel.send({
        embed: {
            description: `${message.member}, Please provide a number between 2 and 500 for the number of messages to be deleted`
        }
    })
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
    .catch(error => message.reply({
        embed: {
            description: `${message.member}, Cannot delete message because: ${error}`
        }
    }));
}