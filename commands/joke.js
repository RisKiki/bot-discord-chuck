const axios          = require('axios');
const JokeCategories = require('../commands/jokeCategories');
const config         = require('../config');

class Joke {

    args;
    message;

    constructor(args, message) {
        this.args    = args;
        this.message = message;
    }

    sendJoke() {
        if (this.args.length === 0){
            this.getRandom();
        } else {

            let i = 0;
            while ((i < this.args.length) && (i<config.MAX_JOKE)) {
                if (parseInt(this.args[0])) {
                    this.getById(parseInt(this.args[i]));
                } else {
                    this.getRandomByCategory(this.args[i]);
                }

                i++;
            }
        }
    }

    getById(id) {
        return axios.get("http://api.icndb.com/jokes/"+id.toString())
        .then(
            res => {
                if (res.data.type === 'success') {
                    this.message.channel.send('[Blague '+ res.data.value.id +'] '+res.data.value.joke);
                } else {
                    this.message.channel.send('Chuck Norris doesn\'t read Muggle, rewrite, only better.');
                }
            }
        ).catch(
            err => {
                console.log(err);
                this.message.channel.send('Chuck Norris broke his jokes, please try again later.');
            }
        )
    }

    getRandomByCategory(category) {
        return axios.get("http://api.icndb.com/jokes/random?limitTo=["+category+"]")
        .then(
            res => {
                if (res.data.type === 'success') {
                    this.message.channel.send('[Blague '+ res.data.value.id +'] '+res.data.value.joke);
                } else if (res.data.type === 'NoSuchCategoryException'){
                    this.message.channel.send('This categorie doesn\'t exist. There are allow categorie :');
                    new JokeCategories(this.args, this.message).get();
                } else {
                    this.message.channel.send('Chuck Norris doesn\'t read Muggle, rewrite, only better.');
                }
            }
        ).catch(
            err => {
                console.log(err);
                this.message.channel.send('Chuck Norris broke his jokes, please try again later.');
            }
        )
    }

    getRandom() {
        return axios.get("http://api.icndb.com/jokes/random")
        .then(
            res => {
                if (res.data.type === 'success') {
                    this.message.channel.send('[Blague '+ res.data.value.id +'] '+res.data.value.joke);
                } else {
                    this.message.channel.send('Chuck Norris doesn\'t read Muggle, rewrite, only better.');
                }
            }
        ).catch(
            err => {
                console.log(err);
                this.message.channel.send('Chuck Norris broke his jokes, please try again later.');
            }
        )
    }
}

module.exports = Joke;