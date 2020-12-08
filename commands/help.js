const { MessageEmbed } = require('discord.js');
const config           = require('../config');

class Help {

    prefix;
    message;

    constructor(
        prefix,
        message
    ){
        this.prefix  = prefix;
        this.message = message
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

        this.message.channel.createWebhook(config.BOT_NAME, this.message.author.displayAvatarURL)
        .then(
            w => w.send(
                {
                    embeds: [
                        joke,
                        jokeByID,
                        jokeByCategorie,
                        jokeCategories,
                        jokeCount,
                        ping,
                        prefix
                    ]
                }
            )
        );
    }
}

module.exports = Help;