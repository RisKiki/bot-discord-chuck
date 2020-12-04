const axios = require('axios')

class JokeCategories {

    args;
    message;

    constructor(args, message) {
        this.args    = args;
        this.message = message
    }

    get() {
        return axios.get("http://api.icndb.com/categories")
        .then(
            res => {
                if (res.data.type === 'success') {
                    res.data.value.join(', ')
                    this.message.channel.send('[Categories] '+res.data.value.join(', '))
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

module.exports = JokeCategories