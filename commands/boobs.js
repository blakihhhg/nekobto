const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async (clent, message, args) => {
    if(!message.channel.nsfw) {return message.channel.send({
        embed: {
            description: `:underage: **This channel is not marked as NSFW!** :angry:`
        }
    })}
    else {
        randomPuppy('boobs')
        .then(url => {
            const embed = new Discord.RichEmbed()
            .setTitle(`Boobs`)
            .setFooter(`Requested by ${message.author.tag}`)
            .setImage(url)
            .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
            return message.channel.send({ embed });
        })
    }
}