const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    var resultflip = Math.floor((Math.random() * 2) + 1);
    if (resultflip == 1) {
        const embed = new Discord.RichEmbed()
        .setTitle("Coinflip")
        .setColor("#F8A61C")
        .setDescription(`The coin landed on heads!`);
        message.channel.send(embed);
    } else if (resultflip == 2) {
        const embed2 = new Discord.RichEmbed()
        .setTitle("Coinflip")
        .setColor("#F8A61C")
        .setDescription(`The coin landed on tails!`);
        message.channel.send(embed2);
    }
}