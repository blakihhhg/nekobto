const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send({
        embed: {
            description: `🚫 **| You don't have __MANAGE_GUILD__ perms.**`
        }
    })
    if(!args[0]) return message.channel.send({
        embed: {
            description: `Please specify something!`
        }
    })
    let prefixes = JSON.parse(fs.readFileSync("./asset/prefixes.json", "utf8"));
    prefixes[message.guild.id] = {
        prefixes: args[0]
    };
    fs.writeFile("./asset/prefixes.json", JSON.stringify(prefixes), (err) => {
        if (err) console.log(err)
    });
    let seEmbed = new Discord.RichEmbed()
    .setColor("#FF9900")
    .setTitle("Change the prefix")
    .setColor("RANDOM")
    .setDescription(`Change ${message.prefix} to ${args[0]}`);
    message.channel.send(seEmbed);
}