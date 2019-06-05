const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    var option = args.slice(0).join(" ")
    if (!option) {
        var embed = new Discord.RichEmbed()
        .setColor("#ec0000")
        .setDescription(`**REMIND:** 
        - \`Hooks such as [] or <> are not to be used when using commands\`.
        **EXAMPLE:**
        - \`${message.prefix}autonick [Oni] {username}\`
        nick will change to \`[Oni] Onichan\` every member who joins.
        **Note:**
        Tag \`{username}\` replace by the username of the new user.
        `)
        .setFooter("Autonick", client.user.displayAvatarURL)
        .setTimestamp()
        message.react("📜")
        message.channel.send({embed});
    } else {
        var nick = JSON.parse(fs.readFileSync("./asset/autonick.json", "utf8"))
        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.channel.send({
            embed: {
                description: `${message.member} Sorry, you don't have permissions to do this!`
            }
        })
        var inputmessage = args.slice(0).join(" ")
        if (!args[0]) {
            nick[message.guild.id] = {
                nick: inputmessage
            };
            var embed = new Discord.RichEmbed()
            .setColor("#ec0000")
            .setDescription(`<@${message.author.id}>, USAGE: ${message.prefix}!autonick <nick>
            **Note:**
            Tag {username} replace by the username of the new user.`)
            .setTimestamp()
            message.channel.send({embed})
        }
        if (args[1]) {
            nick[message.guild.id] = {
                nick: inputmessage
            };
            fs.writeFile("./asset/autonick.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
            });
            var embed = new Discord.RichEmbed()
            .setColor("#ec0000")
            .setDescription(`<@${message.author.id}>. Auto nick set to\n\n\`${inputmessage}\``)
            .setTimestamp()
            message.channel.send({embed})
        }
    }
    if (option.match("on")) {
        var autonicksetting = JSON.parse(fs.readFileSync("./asset/autonickoff.json", "utf8"));
        autonicksetting[message.guild.id] = {
            checker: 1
        };
        fs.writeFile("./asset/autonickoff.json", JSON.stringify(autonicksetting, null, 2), (err) => {
            console.log(err)
        })
        var embed = new Discord.RichEmbed()
        .setColor("#ec0000")
        .setTimestamp()
        .setDescription(`Autonick has been **on**.`)
        .setFooter("Autonick Enable", client.user.displayAvatarURL)
        message.channel.send({embed})
    }
    if (option.match("off")) {
        var autonicksetting = JSON.parse(fs.readFileSync("./asset/autonickoff.json", "utf8"));
        autonicksetting[message.guild.id] = {
            checker: 0
        };
        fs.writeFile("./asset/autonickoff.json", JSON.stringify(autonicksetting, null, 2), (err) => {
            console.error(err)
        })
        var embed = new Discord.RichEmbed()
        .setColor("#ec0000")
        .setDescription(`Autonick has been **off**.`)
        .setTimestamp()
        .setFooter("Autonick Disable", client.user.displayAvatarURL)
        message.channel.send({embed});
    }
    if (option.match("previous")) {
        let nick = JSON.parse(fs.readFileSync("./asset/autonick.json", "utf8"));
        if (!nick[message.guild.id]) {
            var embed = new Discord.RichEmbed()
            .setDescription(`**AUTONICK:**\n\`\`\`None\`\`\``)
            .setColor("#ec0000")
            return message.channel.send(embed)
        }
        var embed = new Discord.RichEmbed()
        .setDescription(`**AUTONICK:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
        .setColor("#ec0000")
        return message.channel.send(embed)
    }
}