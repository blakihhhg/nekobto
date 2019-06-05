const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async (client, message, args) => {
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    randomPuppy('chameleon')
    .then(url => {
        const embed = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag} | Your Chameleon!`, message.author.displayAvatarURL)
        .setImage(url)
        .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
        return message.channel.send({ embed })
    })
}