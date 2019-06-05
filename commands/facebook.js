const Discord = require("discord.js");

exports.run = async(client, message, args) => {

    let facebook = args.slice(0).join('+');

    let link = `https://www.facebook.com/` + facebook;
    if(!facebook)return message.reply(`Masukan Kata yang Dicari `)
    if(!link)return message.reply("Console error")
    let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .addField('Action:', 'Mencari di facebook')
    .addField("Name:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
    .setFooter("Foto Profile", message.author.avatarURL);
    message.channel.send(embed);
    message.author.send(`Kamu telah mencari ${link} di ${ message.guild.name}`);
}

exports.conf = {
    aliases: ['fb'],
    cooldown: "5"
}

exports.help = {
    name: "facebook",
    description: "Cari di facebook",
    usage: "instagram <kata yang ingin dicari>"
}
