const axios = require('axios')

class JokeCount {

    args;
    message;

    constructor(args, message) {
        this.args    = args;
        this.message = message;
    }

    getCount() {
        return axios.get("http://api.icndb.com/jokes/count")
        .then(
            res => {
                if (res.data.type === 'success') {
                    this.message.channel.send('Chuko Norris possède ' + res.data.value.toString() + ' jokes !')
                } else {
                    this.message.channel.send('Chuck Norris ne lit pas le moldu, ré-écrit, en mieux.');
                }
            }
        ).catch(
            err => {
                console.log(err);
                this.message.channel.send('Chuck Norris à casser ses blagues, veuillez ressayer plus tard.');
            }
        )
    }
}

module.exports = JokeCount