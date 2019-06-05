const Discord = require('discord.js');
const figlet = require('figlet');

module.exports.run = async (client, message, args) => {
  if(!args[0]) return message.channel.send({
    embed: {
      description: `${message.member}, Please provide something to convert. `
    }
  })
  figlet(args.join(" "), (err, data) => {
    message.channel.send("```" + data + "```")
  })
}