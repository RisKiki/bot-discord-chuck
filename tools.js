var fs = require('fs')
const config = require('./config')


function getPrefix() {
    var prefix = '%joke';

    prefix = fs.readFileSync(config.PREFIX_FILE_PATH, config.PREFIX_FILE_ENCODING).toString();

    return prefix
}

function setPrefix(prefix) {
    fs.writeFileSync(config.PREFIX_FILE_PATH, prefix);
}

function logUserMessage(id,username,message) {
    const format = '[ Username : '+username+' | PlayerId : '+id+' ] - '+message+'';
    writeLogFile(format);
}

function logBotMessage(username, message) {
    const format = '[ Bot : '+username+' ] - '+message+'';
    writeLogFile(format);
}

function writeLogFile(message) {
    const date          = new Date(Date.now());
    const year          = date.getFullYear();
    const month         = date.getMonth();
    const day           = date.getDay();
    const hours         = date.getHours();
    const minutes       = date.getMinutes();
    const secondes      = date.getSeconds();
    const millisecondes = date.getMilliseconds();

    const format = '['+year+'/'+month+'/'+day+' - '+hours+':'+minutes+':'+secondes+':'+millisecondes+'] \n  '

    fs.mkdir(config.LOG_FOLDER, { recursive: true }, (err) => {
        if (err) console.log('MKDIR ERROR ', err)
        else fs.appendFile(config.LOG_FOLDER+'/log', format + message + '\n \n', (err) => {
            if (err) console.log('WRITE FILE LOG ERROR ', err)
        });
    });
}
 
module.exports = {
    getPrefix,
    setPrefix,
    logUserMessage,
    logBotMessage
}