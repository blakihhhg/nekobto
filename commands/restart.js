const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Restart")
    .setDescription("Sorry, the `restart` command can only be executed by the Developer.")
    .setColor("#cdf785");
    if(message.author.id !== '369404151416750082') return message.channel.send(embed);
    message.channel.send(`Restarted in ${Math.floor(client.ping)}ms`).then(() => {
        process.exit(1);
    })
}