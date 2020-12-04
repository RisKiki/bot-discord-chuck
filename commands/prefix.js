const tools  = require('../tools');

class Prefix {

    args;
    message;
    currentPrefix;

    constructor(args, message, currentPrefix) {
        this.args          = args;
        this.message       = message;
        this.currentPrefix = currentPrefix;
    }

    changePrefix() {
        const oldPrefix = this.currentPrefix;
        const newPrefix = this.args.join(' ');
        tools.setPrefix(newPrefix);
        if (tools.getPrefix() === newPrefix) {
            this.message.channel.send('ATTENTION TOUT LE MONDE ! ' + oldPrefix + ' se transforme et devient ' + newPrefix);
            return newPrefix;
        } else {
            this.message.channel.send('Le préfix n\'as pas pu être changer.');
            return oldPrefix;
        }
    }
}

module.exports = Prefix