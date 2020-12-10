const { MessageEmbed } = require('discord.js');
const config           = require('../config');

class Help {

    prefix;
    message;
    nameBot;

    constructor(
        prefix,
        message,
        nameBot
    ){
        this.prefix  = prefix;
        this.message = message;
        this.nameBot = nameBot;
    }

    sendHelp() {
        const joke = new MessageEmbed()
        .setTitle(`${this.prefix}joke`)
        .setColor(0xff0000)
        .setDescription('Get a random joke')

        const jokeByID = new MessageEmbed()
        .setTitle(`${this.prefix}joke [id]`)
        .setColor(0xff0000)
        .setDescription('Get joke identified by it id');

        const jokeByCategorie = new MessageEmbed()
        .setTitle(`${this.prefix}joke [category]`)
        .setColor(0xff0000)
        .setDescription('Get a random joke in this category');

        const jokeCategories = new MessageEmbed()
        .setTitle(`${this.prefix}jokeCategories`)
        .setColor(0xff0000)
        .setDescription('Get all joke\'s categories');

        const jokeCount = new MessageEmbed()
        .setTitle(`${this.prefix}joke`)
        .setColor(0xff0000)
        .setDescription('Get the number of joke we have');

        const ping = new MessageEmbed()
        .setTitle(`${this.prefix}ping`)
        .setColor(0xff0000)
        .setDescription('Get pong and latency');

        const prefix = new MessageEmbed()
        .setTitle(`${this.prefix}prefix`)
        .setColor(0xff0000)
        .setDescription('Change prefix');

        const help = new MessageEmbed()
        .setTitle(`Help`)
        .setColor(0xff0000)
        .setDescription('Here is all the commands for the bot :')
        .addFields(
            { name: `${this.prefix}joke`, value: 'Get a random joke' },
            { name: `${this.prefix}joke [id]`, value: 'Get joke identified by it id' },
            { name: `${this.prefix}joke [category]`, value: 'Get a random joke in this category' },
            { name: `${this.prefix}jokeCount`, value: 'Get the number of joke\'s' },
            { name: `${this.prefix}jokeCategories`, value: 'Get all joke\'s categories' },
            { name: `${this.prefix}ping`, value: 'Get pong and latency' },
            { name: `${this.prefix}prefix`, value: 'Change prefix' }
        )

        this.message.channel.send(help);
    }
}

module.exports = Help;