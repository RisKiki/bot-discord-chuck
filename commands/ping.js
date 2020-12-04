class Ping {

    args;
    message;

    constructor(args, message) {
        this.args    = args;
        this.message = message;
    }


    pong() {
        let ping = new Date().getTime() - this.message.createdTimestamp;
        this.message.channel.send(`Pong ! Latency : ${ping} ms`);
    }

}

module.exports = Ping