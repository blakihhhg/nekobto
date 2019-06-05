const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  let embed = new Discord.RichEmbed()
      .setAuthor(`${bot.user.username} - Bantuan`, bot.user.displayAvatarURL)
      .setThumbnail(bot.user.displayAvatarURL)
      .setTitle("Kategori")
      .addField(`➣ Core :`, `\`help\` | \`ping\` | \`rolelist\` | \`stats\` | \`weather\` | \`youtube\` | \`instagram\` | \`facebook\` | \`purge\``)
      .addField(`➣ Fun :`, `\`8ball\` | \`advice\` | \`quiz\` |  \`beautiful\` | \`game\` | \`tts\` | \`shorten\` | \`hai\` | \`dice\` | \`emojify\` | \`slots\``)
      .addField(`➣ Gift :`, `\`discosheep\` | \`hug\` | \`kiss\``)
      .addField(`➣ Image :`, `\`dog\` | \`meme\``)
      .addField(`➣ Music :`, `\`play\` | \`stop\` | \`pause\` | \`resume\` | \`leave\``)
      .addField(`➣ Economy :`, `\`transfer\` | \`jobs\` | \`uang\` | \`weekly\` | \`daily\` | \`monthly\``)
      .addField(`➣ Minecraft :`, `\`mcuser\` | \`mcskin\` | \`mcserver\``)
      .addField(`➣ Support My :`, `\`subscribe\` | \`link\``)
      .addField(`➣ Administrator :`, `\`autorole\` | \`kick <@user> <reason>\` | \`ban <user> <reason>\` | \`addrole (@user) (role)\` | \`removerole (user) (role)\` | \`mute (user)\` | \`unmute (user)\` | \`warn (user)\` | \`welcome\` | \`report\` | \`urban\``)
      .addField(`➣ Info :`,  `\`servericon\` | \`info\` | \`useravatar <@user>\` | \`userinfo <@user>\` | \`botstats\` | \`botinfo\``)
      .addField(`➣ Text :`, `\`say <text>\` | \`sayembed <text>\` | \`asciiart <text>\` | \`ask <question>\``)
      .setImage('https://images-ext-1.discordapp.net/external/MSOtkp7ySV-IVGkWcAUdL_c4yreT9WOVmeTbz4p5n5w/https/cdn.discordapp.com/attachments/535567296060588042/542661612394250244/multicolours_1.gif')
      .setDescription('━━━━━━━━━━━━━━━━━━')
      .setColor("RANDOM")
      .setFooter("Prefix Me It's -help", bot.user.displayAvatarURL)
      message.channel.send(embed);
};