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
    }
}

module.exports = JokeCount