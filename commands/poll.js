const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    if (args == 0) return message.channel.send({
        embed: {
            description: `Masukan saran. Contohnya: s!poll aku mandi.`
        }
    })
    let embed = new Discord.RichEmbed()
    .setTitle(`Saran dari ${message.author.username}`)
    .setColor("#ffff00")
    .setDescription(`${args}`.split(',').join(' '));
    return message.channel.send(embed).then(message.delete())
    .then(function (message, str) {
        message.react("✅")
        message.react("⛔")
    }).catch(function() {
    });
};