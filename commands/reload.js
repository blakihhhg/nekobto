const Discord = require("discord.js")
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Reload")
    .setDescription("Sorry, the `reload` command can only be executed by the Developer.")
    .setColor("#cdf785");
    if(message.author.id !== '369404151416750082') return message.channel.send(embed);
    try {
        delete require.cache[require.resolve(`./${args[0]}.js`)];
        let Aembed = new Discord.RichEmbed()
        .setTitle("Reloading..")
        .setDescription(`${args[0]}.js successfully reloaded!`)
        return message.channel.send(Aembed);
    } catch(e) {
        return message.channel.send({
            embed: {
                description: `There is no such command!`
            }
        })
    }
};