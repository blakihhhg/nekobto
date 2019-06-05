const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    const os = require('os');
    const arch = os.arch()
    var cpu = process.cpuUsage().system / 1024 / 1024;
    let icon = message.client.iconURL;
    let embed = new Discord.RichEmbed()
    .setThumbnail(`${client.user.displayAvatarURL}`)
    .setTitle(`**Neko Bot Info**`)
    .setColor("BLUE")
    .setDescription(`• **Bot ::** ${client.user.tag}\n• **Developer ::** 「 @xFuki#2551 」\n• **Mem Usage ::** ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024 * 10) / 10}MB / 4096MB\n• **Cpu Usage ::** ${Math.round(cpu * 100) / 100}%\n• **Oprating System ::** ${os.platform} ${arch}\n• **Users ::** ${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}\n• **Servers ::** ${client.guilds.size.toLocaleString()}\n• **Channels ::** ${client.channels.size.toLocaleString()}\n• **Discord.js ::** v${Discord.version}\n• **Node ::** ${process.version}\n• **Website ::** www.nekobotoffical.xyz\n• **Ping ::** ${client.ping.toFixed(2)}ms`)
    .setImage("https://images-ext-1.discordapp.net/external/MSOtkp7ySV-IVGkWcAUdL_c4yreT9WOVmeTbz4p5n5w/https/cdn.discordapp.com/attachments/535567296060588042/542661612394250244/multicolours_1.gif");
    message.channel.send(embed)
}