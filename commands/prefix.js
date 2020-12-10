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
        if (newPrefix.length < 2) {
            tools.setPrefix(newPrefix);
            if (tools.getPrefix() === newPrefix) {
                this.message.channel.send('ATTENTION TOUT LE MONDE ! ' + oldPrefix + ' se transforme et devient ' + newPrefix);
                return newPrefix;
            } else {
                this.message.channel.send('Prefix can\t be change. Should be an error.');
                return oldPrefix;
            }
        } else {
            this.message.channel.send('The prefix '+newPrefix+' is not correct ! This size must be one.')
            return oldPrefix;
        }
    }
}

module.exports = Prefix