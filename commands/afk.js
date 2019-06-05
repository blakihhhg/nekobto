const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const Reason = args.join(" ");
  if (!Reason) return message.channel.send({
    embed: {
      description: `${message.member} You no longer AFK`
    }
  })
 else {
  message.channel.send({
    embed: {
      description: `${message.member} I set you AFK: ${Reason}`
    }
  })
}}