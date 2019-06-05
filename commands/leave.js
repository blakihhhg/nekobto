const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  if (!message.member.voiceChannel) { return message.channel.send({
      embed: {
          description: `You are not in my voice channel! Come in and tell me face to face!`
      }
  }); }
  message.member.voiceChannel.leave();
  message.channel.send({
    embed: {
      description: `I have left ${message.member.voiceChannel}.`
    }
  });
}