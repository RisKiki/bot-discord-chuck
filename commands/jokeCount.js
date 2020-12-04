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
                    this.message.channel.send('Chuko Norris has ' + res.data.value.toString() + ' jokes !')
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

module.exports = JokeCount