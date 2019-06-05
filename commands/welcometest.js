const { Canvas } = require("canvas-constructor");
const { resolve, join } = require("path");
const { Attachment } = require("discord.js");
const { get } = require("snekfetch"); 
const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (client, message, args) => {
let tes = args.slice(0).join(' ');
if (!tes) return null;
  if (tes.match('test')) {
  var nama = message.author.username
var jadi = nama.length > 12 ? nama.substring(0, 10) + "..." : nama;
async function createCanvas() {
var imageUrlRegex = /\?size=2048$/g;
var {body: background} = await superagent.get("https://cdn.discordapp.com/attachments/585087040576815104/585460751397814292/welcome2.png");
var {body: avatar} = await superagent.get(message.author.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
return new Canvas(1920, 1080)
 .setColor('GREEN')
 .setTextFont('50px System')
 .setTextAlign('center')
 .setTextFont('50px Oswald')//ilang cuk :V.discriminator}`, 875, 145)
 .addImage(background, 0, 0, 1920, 1080)
 .addText("Selamat datang", 1225, 489)
 .addText(`${jadi}#${message.author.discriminator}`, 1225, 612)
 .addRoundImage(avatar, 372, 408, 256, 256, 128)
 .toBufferAsync();
  }
  message.channel.send(`Selamat datang ${message.author}\nNama = ${message.author}\nCount = ${message.guild.memberCount}\nServer = ${message.guild.name}`, new Discord.Attachment(await createCanvas()));
  }
}