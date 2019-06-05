const Discord = require("discord.js");
const sm = require("string-similarity")

module.exports.run = async (client, message, args) => {
    if(message.author.bot) return;
    if(message.channel.type !== "text") return;
    let members = [];
    let indexes = [];
    message.guild.members.forEach(function(member) {
        members.push(member.user.username);
        indexes.push(member.id);
    })
    let match = sm.findBestMatch(args.join(' '), members);
    let username = match.bestMatch.target;
    let member = message.guild.members.get(indexes[members.indexOf(username)])
    let defindUser = "";
    let defindUser2 = "";
    if(!args[0]) {
        defindUser = message.author
        defindUser2 = message.member
    } else {
        let mention = message.mentions.users.first()
        defindUser = mention || member.user
        defindUser2 = message.mentions.members.first() || message.guild.members.get(args[0]) || member
    }
    message.channel.send({embed: new Discord.RichEmbed()
        .setImage(defindUser.avatarURL)
        .setTitle(defindUser.tag + `Avatar Preview`)
        .setColor(`${message.guild.me.displayHexColor!=='#000000' ? message.guild.me.displayHexColor : 0xffffff}`)
    })
}