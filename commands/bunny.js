const Discord = require("discord.js");
const client = new Discord.Client();
const request = require("request");

module.exports.run = async (client, message, args, level) => {
    let imgs = Math.floor(Math.random() * 80);
    let url = ['https://www.reddit.com/r/Rabbits/.json?sort=rising&t=hour&limit=100'];
    let bicon = client.user.displayAvatarURL;
    request({
        method: 'GET',
        uri: url[Math.floor(Math.random() * url.length)]
    }, function (err, response, data) {
        if(err) {
            console.log(err, null);
            return;
        }
        data = JSON.parse(data);
        var mainObj = data.data.children;
        var urls = {};
        for(let i = 0; i < mainObj.length; i++) {
            let url = mainObj[i].data.url;
            urls[i+1] = url;
        }
        const embed = new Discord.RichEmbed()
        .setTitle("Jump! Jump!")
        .setColor('RANDOM')
        .setImage(urls[imgs])
        .setFooter(`${client.user.username}: Cute`, `${bicon}`)
        message.channel.send({embed});
        if(client.user && message.content === "undefined") {
            message.delete()
        }
    })
};