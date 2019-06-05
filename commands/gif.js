const Discord = require("discord.js");
const gifSearch = require("gif-search");

module.exports.run = async (client, message, args) => {
    if (!args[0]) return message.channel.send({
        embed: {
            description: `${message.prefix}gif <gif name>`
        }
    });
    gifSearch.query(args[0]).then(
        gifUrl => {
            let randomcolor = ((1 << 24) * Math.random() | 0).toString(16)
            var embed = new Discord.RichEmbed()
            .setColor(`#${randomcolor}`)
            .setTimestamp() 
            .setImage(gifUrl)
            .setFooter(`Requested by: ${message.author.tag}`);
            message.channel.send(embed);
        }
    );
}