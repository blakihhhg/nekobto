const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require("discord.js");
const superagent = require("superagent");
const Youtube = require("simple-youtube-api");
const ytdl = require("ytdl-core");
const opus = require("opusscript");
const moment = require("moment");
const { Canvas } = require("canvas-constructor");
const { resolve, join } = require("path");
const { Attachment } = require("discord.js");
const { get } = require("snekfetch");
const fs = require("fs");
const db = require('quick.db');
const config = require("./asset/config.json")
const coins = require("./asset/coins.json");
const xp = require("./asset/xp.json");
const prefix = `${config.prefix}`
var color = Math.floor(Math.random() * 16777214) + 1
var commandcooldown = new Set();
var queue = new Map();
var client = new Discord.Client({
  disableEveryone: true
})
var youtube = new Youtube(process.env.YOUTUBE)

client.on('ready', function() {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  setInterval(async () => {
    const statuslist = [
      `-help | Hello World!`,
      `-help | Powered by VPS and Vultr`,
      `-help | Dengan 131.041 Channel`,
      `-help | Dengan 9182 Teman`,
      `-help | Dengan 871 Server`,
      `-help | Thanks for @xFuki#2551`,
      `-help | https://nekobotsupport.glitch.me/`,
      `${moment().utcOffset('+0700').format("HH:mm A")} `
    ];
    const random = Math.floor(Math.random() * statuslist.length);
    try {
      await client.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "STREAMING",
          url: 'https://www.twitch.tv/nekocloud'
        },
        status: "dnd"
      });
    } catch (error) {
      console.error(error);
    }
  }, 2000);
});

client.on("guildMemberAdd", async (member, client, message, args, level) => {
  var namam = member.user.username
  var jadim = namam.length > 12 ? namam.substring(0, 10) + "..." : namam;
  async function createCanvas() {
    var imageUrlRegex = /\?size=2048$/g;
    var {body: background} = await superagent.get("https://media.discordapp.net/attachments/556039294502830081/558985065212674080/naruto_2.jpg");
    var {body: background} = await superagent.get("https://cdn.discordapp.com/attachments/585087040576815104/585460751397814292/welcome2.png");
    var {body: avatar} = await superagent.get(message.author.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
return new Canvas(1920, 1080)
 .setColor('GREEN')
 .setTextFont('50px System')
 .setTextAlign('center')
 .setTextFont('50px Oswald')//ilang cuk :V.discriminator}`, 875, 145)
 .addImage(background, 0, 0, 1920, 1080)
 .addText("Selamat datang", 1225, 489)
 .addText(`${jadim}#${message.author.discriminator}`, 1225, 612)
 .addRoundImage(avatar, 372, 408, 256, 256, 128)
 .toBufferAsync();
  }
  var welcome = JSON.parse(fs.readFileSync("./asset/welcome.json", "utf8"))
  if (!welcome[member.guild.id]) {
    welcome[member.guild.id] = {
      welcome: 0
    };
  }
  let channel = member.guild.channels.get(`${welcome[member.guild.id].nick}`);
  if (!channel) return;
  channel.send(new Discord.Attachment(await createCanvas()));
});

client.on("guildMemberRemove", async (member, client, message, args, level) => {
  var namam = member.user.username
  var jadim = namam.length > 12 ? namam.substring(0, 10) + "..." : namam;
  async function createCanvas() {
    var imageUrlRegex = /\?size=2048$/g;
    var {body: background} = await superagent.get("https://media.discordapp.net/attachments/556039294502830081/558985065212674080/naruto_2.jpg");
    var {body: background} = await superagent.get("https://cdn.discordapp.com/attachments/575600894998085642/585477929237217292/leave2.png");
    var {body: avatar} = await superagent.get(message.author.displayAvatarURL.replace(imageUrlRegex, "?size=128"));
return new Canvas(1920, 1080)
 .setColor('GREEN')
 .setTextFont('50px System')
 .setTextAlign('center')
 .setTextFont('50px Oswald')//ilang cuk :V.discriminator}`, 875, 145)
 .addImage(background, 0, 0, 1920, 1080)
 .addText("Selamat tinggal", 1225, 489)
 .addText(`${jadim}#${message.author.discriminator}`, 1225, 612)
 .addRoundImage(avatar, 372, 408, 256, 256, 128)
 .toBufferAsync();
  }
  var welcome = JSON.parse(fs.readFileSync("./asset/welcome.json", "utf8"))
  if (!welcome[member.guild.id]) {
    welcome[member.guild.id] = {
      welcome: 0
    };
  }
  let channel = member.guild.channels.get(`${welcome[member.guild.id].nick}`);
  if (!channel) return;
  channel.send(new Discord.Attachment(await createCanvas()));
});

client.on("guildMemberAdd", member => {
  let autorole = JSON.parse(fs.readFileSync("./asset/autorole.json", "utf8"));
  if (!autorole[member.guild.id]) {
    autorole[member.guild.id] = {
      autorole: config.autorole
    };
  }
  var role = autorole[member.guild.id].role;
  if (!role) return;
  member.addRole(role);
});

client.on('guildMemberAdd', async member => {
  let guild = member.guild;
  let autonick = JSON.parse(fs.readFileSync("./asset/autonick.json", "utf8"));
  if(!autonick[member.guild.id]) return;
  var autonicksetting = JSON.parse(fs.readFileSync("./asset/autonickoff.json", "utf8"));
  if(!autonicksetting[member.guild.id]) {
    autonicksetting[member.guild.id] = {
      values: 1
    };
  }
  var values = autonicksetting[member.guild.id].checker
  if (values === undefined) return;
  if (values === 0) return;
  if (values === 1) {
    let newNick = autonick[member.guild.id].nick
    newNick = newNick.replace('{username}', member.user.username)
    member.guild.members.get(`${member.user.id}`).setNickname(newNick)
  }
});

fs.readdir("./commands/", (err, files) => {
  console.log(`Loaded ${files.length} commands.`)
  if(err) console.log(err);
  let jsFile = files.filter(f => f.split(".").pop() === "js");
  if(jsFile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
})

client.on("message", async message => {
  let prefixes = JSON.parse(fs.readFileSync("./asset/prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]) {
    prefixes[message.guild.id] = {
      prefixes: config.prefix
    };
  }
  let prefix = prefixes[message.guild.id].prefixes;
  if(message.author.bot) return undefined;
  if(message.channel.type === 'dm') return;
  if(message.content.toLowerCase() === `<@${client.user.id}>`) {
    let embed = new Discord.RichEmbed()
    .setDescription(`:hand_splayed: Hi ${message.member} My name is Neko and my prefix in this server\nis ${prefix}`)
    .setFooter(`For more info use ${prefix}help`)
    message.channel.send(embed)
  }
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  if(message.author.bot) return undefined;
  if(!message.content.startsWith(prefix)) return undefined;
  message.prefix = prefix;
  try {
    let commandFile = require(`./commands/${cmd}.js`);
    commandFile.run(client, message, args, queue, color);
  } catch (err) {

    if(!coins[message.author.id]){
      coins[message.author.id] = {
        coins: 0
      };
    }
    let coinAmt = Math.floor(Math.random() * 15) + 14;
    let baseAmt = Math.floor(Math.random() * 15) + 14;
    if(coinAmt === baseAmt){
      coins[message.author.id] = {
        coins: coins[message.author.id].coins + coinAmt
      };
      fs.writeFile("./asset/coins.json", JSON.stringify(coins), (err) => {
        if (err) console.log(err)
      });
    }
    let xpAdd = Math.floor(Math.random() * 15) + 14;
    if(!xp[message.author.id]){
      xp[message.author.id] = {
        xp: 0,
        level: 1
      };
    }
    let curxp = xp[message.author.id].xp;
    let curlvl = xp[message.author.id].level;
    let nxtLvl = xp[message.author.id].level * 300;
    xp[message.author.id].xp =  curxp + xpAdd;
    if(nxtLvl <= xp[message.author.id].xp){
      xp[message.author.id].level = curlvl + 1;
    }
    fs.writeFile("./asset/xp.json", JSON.stringify(xp), (err) => {
      if(err) console.log(err)
    })
  }
})
  
client.on('message', async message => {
  var message = message;
  if (message.author.bot) return;
  if (message.channel.type === 'dm') return;
  var DEFAULTPREFIX = message.prefix
  var {body} = await superagent
  .get("https://kurokobot.glitch.me/")
  if (!body[message.guild.id]) {
    body[message.guild.id] = {
      PREFIXES: DEFAULTPREFIX
    };
  }
  var PREFIX = body[message.guild.id].PREFIXES
  if (commandcooldown.has(message.author.id)) {
    return;
  }
  commandcooldown.add(message.author.id);
  setTimeout(() => {
    commandcooldown.delete(message.author.id);
  }, 2000);
  if (message.author.bot) return undefined;
  if (!message.content.startsWith(PREFIX)) return undefined;
  var randomhexcolor = Math.floor(Math.random() * 16777214) + 1
  var serverQueue = queue.get(message.guild.id);
  var args = message.content.substring(PREFIX.length).split(" ")
  var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  var invitelink = "https://discord.gg/jxJQmeJ";
  let command = message.content.toLowerCase().split(' ')[0];
  command = command.slice(PREFIX.length)
  if (command === 'play' || command === 'p') {
    var searchString = args.slice(1).join(" ");
    if(!searchString) return message.channel.send({embed: {
      description: `❌ Please usage: \`${PREFIX}play <Song name | URL | Playlist URL>\``
    }})
    const voiceChannel = message.member.voiceChannel;
    if (!voiceChannel) return message.channel.send({
      embed: {
        description: `${message.author} You are not on the voice channel, you need to be in a voice channel to play some music!.`
      }
    })
    const permissions = voiceChannel.permissionsFor(client.user);
    if (!permissions.has('CONNECT')) {
      message.channel.send({
        embed: {
          description: `Sorry, cannot connect to your voice channel, make sure I have the permissions!`
        }
      })
    }
    if (!permissions.has('SPEAK')) {
      return message.channel.send({
        embed: {
          description: `I cannot speak in this voice channel, make sure I have the permissions!`
        }
      })
    }
    if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      const playlist = await youtube.getPlaylist(url);
      const videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        const video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message, voiceChannel, true);
      }
      return message.channel.send({
        embed: {
          description: `${playlist.title} has been added to the queue!`
        }
      })
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
        try {
          var videos = await youtube.searchVideos(searchString, 10);
          let index = 0;
          var selection = await message.channel.send({
            embed: {
              description: `__**🔽 Please select your song below:**__
              ${videos.map(video2 => `**[\`${++index}\`] -** ${video2.title}`).join('\n')}
              **Type in the number listed above, you have a 30 seconds before it get automatically canceled!**`
            }
          })
          try {
            var response = await message.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
              maxMatches: 1,
              time: 30000,
              errors: ['time']
            });
            selection.delete();
          } catch (err) {
            console.error(err);
            return message.channel.send({
              embed: {
                description: `No or invalid value entered, cancelling video selection.`
              }
            })
            selection.delete();
          }
          const videoIndex = parseInt(response.first().content);
          var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
        } catch (err) {
          console.error(err)
          return message.channel.send({
            embed: {
              description: `ERR! I could not obtain any search results.`
            }
          })
        }
      }
      return handleVideo(video, message, voiceChannel);
    }
  } else if (command === 'skip' || command === 's') {
    if (!message.member.voiceChannel) return message.channel.send({
      embed: {
        description: `${message.author} You are not in a voice channel!`,
      }
    })
    if (!serverQueue) return message.channel.send({
      embed: {
        description: `Hi ${message.author}, There is nothing playing that I could skip for you.`
      }
    })
    serverQueue.connection.dispatcher.end('Skip command has been used!');
    return undefined;
  } else if (command === 'stop') {
    let member = message.member;
    if (!message.member.voiceChannel) return message.channel.send({
      embed: {
        description: `Hi ${message.author}, You need to join voice channel.`,
      }
    })
    if (!serverQueue) return message.channel.send({
      embed: {
        description: `Hi ${message.author}, There is nothing playing that I could stop for you.`
      }
    })
    serverQueue.songs = [];
    serverQueue.connection.dispatcher.end('Stop is already used!');
    return message.channel.send({embed: {
      description: `⏹ Music has been stoped!.`,
    }}) + message.channel.send({embed: {
      fields: [{
      }],
      timestamp: new Date()
    }});
  } else if (command === 'volume' || command === 'v') {
    if (!message.member.voiceChannel) return message.channel.send({
      embed: {
        description: `${message.author}, You are not in a voice channel!.`
      }
    });
    if (!serverQueue) return message.channel.send({
      embed: {
        description: `There is nothing playing.`
      }
    })
    if (!args[1]) return message.channel.send({
      embed: {
        description: `The current volume is: __**${serverQueue.volume}%**__`
      }
    });
    serverQueue.volume = args[1];
    if (args[1] > 100) return message.channel.send({
      embed: {
        description: `${message.auhor}, Volume limit is 100%, your ear will bleeding!`
      }
    });
    serverQueue.volume = args[1];
    if (args[1] > 100) return !serverQueue.connection.setVolumeLogarithmic(args[1] / 100) + 
    message.channel.send({
      embed: {
        description: `${message.author} Volume limit is 100%, your ear will bleeding!`
      }
    });
    if (args[1] < 101) return serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 100) +
    message.channel.send({
      embed: {
        description: `I set the volume to: __**${args[1]}**%__`
      }
    });
  } else if (command == 'np') {
    if (!serverQueue) return message.channel.send({
      embed: {
        description: `There is nothing playing.`
      }
    })
    return message.channel.send({
      embed: {
        description: `🎶 Now playing: __**${serverQueue.songs[0].title}**__`
      }
    })
  } else if (command === `queue` || command === 'q') {
    var index = 0;
    if (!serverQueue) return message.channel.send({
      embed: {
        description: `There is nothing playing.`
      }
    })
    return message.channel.send({
      embed: {
        description: `__**Songs in the queue list:**__
        ${serverQueue.songs.map(song => `**${index++}.** ${song.title}`).join(`\n`)}`
      }
    });
  } else if (command == 'pause') {
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause();
      return message.channel.send({
        embed: {
          description: `⏸ Music has paused.`
        }
      })
    }
    return message.channel.send({
      embed: {
        description: `There is nothing playing.`
      }
    })
  } else if (command === 'resume' || command === 'r') {
    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      return message.channel.send({
        embed: {
          description: `⏯ Music has resumed.`
        }
      })
    }
    return message.channel.send({
      embed: {
        description: `There is nothing playing.`
      }
    })
  }
  return undefined;
});
async function handleVideo(video, message, voiceChannel, playlist = false) {
  const serverQueue = queue.get(message.guild.id);
  console.log(video);
  const song = {
    id: video.id,
    title: Discord.Util.escapeMarkdown(video.title),
    url: `https://www.youtube.com/watch?v=${video.id}`,
    uploadedby: video.channel.title,
    channelurl: `https://www.youtube.com/channel/${video.channel.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    request: message.author,
    channels: voiceChannel.name,
  }
  if (!serverQueue) {
    const queueConstruct = {
      textChannel: message.channel,
      voiceChannel: voiceChannel,
      connection: null,
      songs: [],
      volume: 100,
      playing: true
    };
    queue.set(message.guild.id, queueConstruct);
    queueConstruct.songs.push(song);
    try {
      var connection = await voiceChannel.join();
      queueConstruct.connection = connection;
      play(message.guild, queueConstruct.songs[0]);
    } catch (error) {
      console.error(`I Could not join the voice channel: ${error}`);
      queue.delete(message.guild.id);
      return message.channel.send({
        embed: {
          description: `I could not join the voice channel: ${error}`
        }
      });
    }
  } else {
    var queueembed = new Discord.RichEmbed()
    .setAuthor(`Added to queue`, `https://images-ext-1.discordapp.net/external/YwuJ9J-4k1AUUv7bj8OMqVQNz1XrJncu4j8q-o7Cw5M/http/icons.iconarchive.com/icons/dakirby309/simply-styled/256/YouTube-icon.png`)
  .addField(' :film_frames: Title', `**__[${song.title}](${song.url})__**`, true)
  .addField(' :electric_plug: Video ID', `${song.id}`, true)
  .addField(" :movie_camera: Uploaded by", `[${song.uploadedby}](${song.channelurl})`, true)
  .addField(" :hourglass: Duration", `${song.durationh}hrs ${song.durationm}mins ${song.durations}secs`, true)
  .addField(" :red_circle: Request by", `${song.request}`, true)
  .addField(" :dvd: Voice Channel", `${song.channels}`, true)
  .addField(" :loud_sound: Volume", `${serverQueue.volume}%`, true)
  .setImage(`https://media.wired.com/photos/5a0b6dbc4d244a18f0437811/master/pass/iStock-636156852.jpg`)
  .setFooter(`Jika tidak ada suara request musiknya lagi!`)
    .setTimestamp();
    serverQueue.songs.push(song);
    console.log(serverQueue.songs);
    if (playlist) return undefined;
    else return message.channel.send(queueembed);
  }
  return undefined;
}
function play(guild, song) {
  const serverQueue = queue.get(guild.id);
  if (!song) {
    serverQueue.voiceChannel.leave();
    queue.delete(guild.id);
    return;
  }
  console.log(serverQueue.songs);
   const dispatcher = serverQueue.connection.playStream(ytdl(song.url, { filter: 'audioonly', quality: 'highest' }))
  .on('end', reason => {
    let end = new Discord.RichEmbed()
    .setDescription('``Musik udah selesai :)``')
    serverQueue.textChannel.send(end)
    if (reason === 'Stream is not generating quickly enough.') console.log('Song ended.');
    else console.log(reason);
    serverQueue.songs.shift();
    play(guild, serverQueue.songs[0]);
  })
  .on('error', error => console.error(error));
  dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
  let startembed = new Discord.RichEmbed()
  .setAuthor(`Start Playing`, `https://images-ext-1.discordapp.net/external/YwuJ9J-4k1AUUv7bj8OMqVQNz1XrJncu4j8q-o7Cw5M/http/icons.iconarchive.com/icons/dakirby309/simply-styled/256/YouTube-icon.png`)
  .setThumbnail(`https://i.ytimg.com/vi/${song.id}/default.jpg?width=80&height=60`)
  .addField(' :film_frames: Title', `**__[${song.title}](${song.url})__**`, true)
  .addField(' :electric_plug: Video ID', `${song.id}`, true)
  .addField(" :movie_camera: Uploaded by", `[${song.uploadedby}](${song.channelurl})`, true)
  .addField(" :hourglass: Duration", `${song.durationh}hrs ${song.durationm}mins ${song.durations}secs`, true)
  .addField(" :red_circle: Request by", `${song.request}`, true)
  .addField(" :dvd: Voice Channel", `${song.channels}`, true)
  .addField(" :loud_sound: Volume", `${serverQueue.volume}%`, true)
  .setImage(`https://media.wired.com/photos/5a0b6dbc4d244a18f0437811/master/pass/iStock-636156852.jpg`)
  .setFooter(`Jika tidak ada suara request musiknya lagi!`)
  .setTimestamp();
  serverQueue.textChannel.send(startembed);
}

client.login(process.env.TOKEN);