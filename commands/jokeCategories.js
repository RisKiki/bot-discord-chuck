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

module.exports = JokeCategories