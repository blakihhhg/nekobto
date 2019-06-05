const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle("😂 Fun")
    .setTimestamp()
    .addField("`" + message.prefix +"8ball`", "Ask Magic Question.", true)
    .addField("`" + message.prefix +"Dog`", "Get a random dog image.", true)
    .addField("`" + message.prefix +"Cat`", "Get random cat image.", true)
    .addField("`" + message.prefix +"Meme`", "Get a random meme.", true)
    .addField("`" + message.prefix +"Pig`", "Get a random meme.", true)
    .addField("`" + message.prefix +"Chameleon`", "Get a Chameleon.", true)
    .addField("`" + message.prefix +"Joke`", "Get a random Joke.", true)
    .addField("`" + message.prefix +"Quiz`", "Get Question.", true)
    .addField("`" + message.prefix +"Anime`", "Get Anime Info", true)
    .addField("`" + message.prefix +"Animemes`", "Get Anime Meme Photo", true)
    .addField("`" + message.prefix +"Get`", "Get a Achievment.", true)
    .addField("`" + message.prefix +"Flip`", "Coin Flip", true)
    .addField("`" + message.prefix +"Gif`", "Get a Gif", true)
    .addField("`" + message.prefix +"Emoji`", "Same Like Ascii", true)
    .addField("`" + message.prefix +"Bunny`", "Get a random Bunny", true)
    message.channel.send(embed).then(msg => {msg.delete(20000)});
}