const Discord = require("discord.js");

exports.run = async(client, message, args) => {

    let instagram = args.slice(0).join('+');

    let link = `https://www.instagram.com/` + instagram;
    if(!instagram)return message.reply(`Masukan Kata yang Dicari `)
    if(!link)return message.reply("Console error")
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('Action:', 'Mencari di instagram')
    .addField("Name:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter("Foto Profile", message.author.avatarURL);
    message.channel.send(embed);
    message.author.send(`Kamu telah mencari ${link} di ${ message.guild.name}`);
}

exports.conf = {
    aliases: ['ig'],
    cooldown: "5"
}

exports.help = {
    name: "instagram",
    description: "Cari di instagram",
    usage: "instagram <kata yang ingin dicari>"
}
