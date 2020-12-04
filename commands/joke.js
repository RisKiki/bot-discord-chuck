const axios          = require('axios');
const JokeCategories = require('../commands/jokeCategories');

class Joke {

    args;
    message;

    constructor(args, message) {
        this.args    = args
        this.message = message;
    }

    sendJoke() {
        console.log("args", this.args)
        if (this.args.length === 0){
            this.getRandom();
        }
        // for (let i = 0; i < this.args.length; i++) {
        if (parseInt(this.args[0])) {
            this.getById(parseInt(this.args[0]))
        } else {
            this.getRandomByCategory(this.args[0])
        }
        // }
    }

    // sendErrorArgs() {
    //     this.message.channel.send('Chuck Norris doesn\'t read Muggle, rewrite, only better.')
    // }

    getById(id) {
        return axios.get("http://api.icndb.com/jokes/"+id.toString())
        .then(
            res => {
                if (res.data.type === 'success') {
                    this.message.channel.send('[Blague '+ res.data.value.id +'] '+res.data.value.joke)
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
                    this.message.channel.send('[Blague '+ res.data.value.id +'] '+res.data.value.joke)
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
                    this.message.channel.send('[Blague '+ res.data.value.id +'] '+res.data.value.joke)
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

module.exports = Joke