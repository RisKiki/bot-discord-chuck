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
 
module.exports = {
    getPrefix,
    setPrefix
}