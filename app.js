const axios          = require('axios');
const Help = require('./commands/help');
const Joke           = require('./commands/joke');
const JokeCategories = require('./commands/jokeCategories');
const JokeCount      = require('./commands/jokeCount.js');
const Ping           = require('./commands/ping');
const Prefix         = require('./commands/prefix');
const tools          = require('./tools');

class App {

    client;
    config;
    nameBot;
    prefix;

    constructor(client, config) {
        this.client = client;
        this.config = config;
        this.prefix = tools.getPrefix();
    }

    login() {
        this.client.login(
            this.config.DISCORD_TOKEN
        ).catch(err => console.log("err", err));
    }

    ready() {
        this.client.on('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}!`);
            this.nameBot = this.client.user.username;
        });
    }

    listenMessage() {
        this.client.on('message', msg => {
            if (msg.author.id !== this.config.ID_BOT) {
                tools.logUserMessage(msg.author.id, msg.author.username, msg.content)

                const params      = msg.content.split(' ')
                const prefix      = params[0];
                const args        = params.slice(1,params.length);
                const validPrefix = this.prefix;
            
                console.log("params",params)

                switch(prefix) {
                    case validPrefix+"joke":
                        new Joke(args, msg).sendJoke();
                        break;
            
                    case validPrefix + 'jokeCount':
                        new JokeCount(args, msg).getCount();
                        break;
            
                    case validPrefix + 'jokeCategories':
                        new JokeCategories(args, msg).get();
                        break;
            
                    case validPrefix + 'ping':
                        new Ping(args, msg).pong();
                        break;
            
                    case validPrefix + 'prefix':
                        this.prefix = new Prefix(args, msg, this.prefix).changePrefix();
                        break;

                    case validPrefix + 'help':
                        new Help(this.prefix, msg).sendHelp();
                        break;
            
                    default:
                        break;
                }
            } else {
                console.log('Bot : '+__dirname+' | '+msg.content)
                tools.logBotMessage(msg.author.username, msg.content);
            }
        });
    }

    start() {
        this.login();
        this.ready();
        this.listenMessage();
    }
}

module.exports = App


