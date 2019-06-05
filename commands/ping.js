const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports.run = async (client, message, args) => {
    const m = await message.channel.send({
        embed: {
            description: `Ping?`
        }
    });
    m.edit({
        embed: {
            description: `Pong! Latency is **${m.createdTimestamp - message.createdTimestamp}ms**. API Latency is **${Math.round(client.ping)}ms**`
        }
    });
}