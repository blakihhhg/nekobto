const Discord = require("discord.js");
let coins = require("../asset/coins.json");

module.exports.run = async (client, message, args) => {
    if(!coins[message.author.id]) {
        coins[message.author.id] = {
            coins: 0
        };
    }
    let userCoins = coins[message.author.id].coins;
    let coinicon = message.author.displayAvatarURL
    let coinEmbed = new Discord.RichEmbed()
    .setAuthor(`${message.author.username}'s Balance`)
    .setDescription(`Here is ${message.author.username}'s Balance!`)
    .setColor("#0263ff")
    .setThumbnail(coinicon)
    .addField( "Coins 📀", `${userCoins} \\🔘`, true)
    .addField("Gain more coins", "by talking more in chat!", true)
    .addField("Want to send coins to people?", `${message.prefix}pay <user> <amount> (Comming Soon :no_entry_sign:)`, true)
    .setFooter(`Requested By ${message.author.username} ID: ${message.author.id}`, message.author.displayAvatarURL);
    const mess = await message.channel.send(`🔄 Loading Coins of user ${message.author.id}`);
    mess.edit(coinEmbed)
}