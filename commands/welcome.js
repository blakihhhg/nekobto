const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    var option = args.slice(0).join(" ")
    if (!option) {
        var embed = new Discord.RichEmbed()
        .setColor('BLUE')
        .setDescription(`**REMIND:**\nHooks such as [] or <> are not to be used when using commands.\n**Command**\n${message.prefix}welcome set <#channel>\n${message.prefix}welcome #welcome-goodbye`)
        .setFooter("welcome", client.user.displayAvatarURL)
        .setTimestamp()
        message.react("📜")
        message.channel.send({embed});
    } else {
        var nick = JSON.parse(fs.readFileSync("./asset/welcome.json", "utf8"))
        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send({
            embed: {
                description: `Sorry, you don't have permissions to do this!`
            }
        });
        var inputmessage = message.mentions.channels.first()
        if (args[0]) {
            nick[message.guild.id] = {
                nick: inputmessage.id
            };
            fs.writeFile("./asset/welcome.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
            });
            var embed = new Discord.RichEmbed()
            .setColor("#38087e")
            .setDescription(`<@${message.author.id}>. \n\n**Welcome set to**\n${inputmessage}`)
            .setTimestamp()
            message.channel.send({embed});
        }
    }
}