const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send({
        embed: {
            description: `Sorry, but you don't have permission to use this!`
        }
    })
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
}