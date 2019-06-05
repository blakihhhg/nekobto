const Discord = require('discord.js');
const quiz = [

{q: "What is the color of the sky?", a: ["colorless", "not visible"]},
    {q: "Mention the brands of soft drinks.", a: ["pepsi", "coke", "rc", "7up", "sprite", "mountain dew"]},
    {q: "Give the name of the programming language.", a: ["actioncript", "coffeescript", "c", "c ++", "basic", "python", "perl", "javascript", "dotnet "," lua "," crystal "," go "," d "," php "," ruby ​​"," rust "," dart "," java "," javascript "]},
    {q: "Who is a good child?", a: ["you", "spinning"]},
    {q: "Who created me?", a: ["Vokas", "MathoCraft"]},
    {q: "What programming language do I make?", a: ["javascript",]},
    {q: "Name the seventh planet from the Sun", a: ["uranus"]},
    {q: "Give the name of the largest island in the World.", a: ["greenland",]},
    {q: "What is the longest river in the world?", a: ["amazon", "amazon river"]},
    {q: "Give the name of the largest ocean in the world.", a: ["pacific", "pacific ocean"]},
    {q: "Name one of the three main colors.", a: ["blue", "red", "yellow"]},
    {q: "How many colors are there in the rainbow?", a: ["7", "seven"]},
    {q: "What do you call the span of a thousand years?", a: ["millennium"]},
    {q: "How many boxes on the chessboard?", a: ["64", "sixty four"]},
    {q: "How many degrees are found in a circle?", a: ["360", "360 degrees", "three hundred sixty"]},
    {q: "The Dewey Decimal System is used to group what?", a: ["books"]},
    {q: "How many points does the compass have?", a: ["32", "thirty two"]},
    {q: "How many strings does selo have?", a: ["4", "four"]},
    {q: "How many symphonies did Beethoven concoct?", a: ["9", "nine"]},
    {q: "How many lines does Limerick have to have?", a: ["5", "five"]},
    {q: "What is the most basic application that Microsoft made?", a: ["visual basic"]},
    {q: "What is the most complicated application?", a: ["binary"]},
    {q: "What coffee is there on the floor?", a: ["spilled coffee"]}
];
const options = {
    max: 1,
    time: 300000,
    errors: ["time"],
};

module.exports.run = async (client, message, args) => {
    const item = quiz[Math.floor(Math.random() * quiz.length)];
    await message.channel.send(item.q);
    try {
        const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
        const winnerMessage = collected.first();
        if(args[0] !== winnerMessage.content) return message.channel.send("**Your answer is correct**");
        return message.channel.send({embed: new Discord.RichEmbed()
        .setAuthor(`Winner: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
        .setTitle(`Correct Answer: \`${winnerMessage.content}\``)
        .setFooter(`Question: ${item.q}`)
        .setColor(message.guild.me.displayHexColor)
        })
    } catch (_) {
        return message.channel.send({embed: new Discord.RichEmbed()
        .setAuthor('No one got the answer in time!')
        .setTitle(`Correct Answer(s): \`${item.a}\``)
        .setFooter(`Question: ${item.q}`)
        })
    }
}