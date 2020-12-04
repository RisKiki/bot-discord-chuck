const axios          = require('axios');
const Joke           = require('./commands/joke');
const JokeCategories = require('./commands/jokeCategories');
const JokeCount      = require('./commands/jokeCount.js')

class App {

    client;
    config;

    constructor(client, config) {
        this.client = client;
        this.config = config;
    }

    login() {
        this.client.login(
            this.config.DISCORD_TOKEN
        ).catch(err => console.log("err", err));
    }

    ready() {
        this.client.on('ready', () => {
            console.log(`Logged in as ${this.client.user.tag}!`);
        });
    }

    listenMessage() {
        this.client.on('message', msg => {
            const params = msg.content.split(' ')
            const prefix = params[0];
            const args = params.slice(1,params.length);
        
            console.log("params",params)
            switch(prefix) {
                case '%joke':
                    new Joke(args, msg).sendJoke()
                    break;
        
                case '%jokeCount':
                    new JokeCount(args, msg).getCount();
                    break;
        
                case '%jokeCategories':
                    new JokeCategories(args, msg).get();
                    break;
        
                case '%ping':
                    ping(args, msg);
                    break;
        
                case '%prefix':
                    prefix(args, msg);
                    break;
        
                default:
                    break;
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


