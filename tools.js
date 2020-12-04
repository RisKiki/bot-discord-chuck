fs = require('fs')


function getPrefix() {
    var prefix = '%joke';

    prefix = fs.readFileSync('./prefix', 'utf8').toString();

    return prefix
}

function setPrefix(prefix) {
    fs.writeFileSync('./prefix', prefix);
}
 
module.exports = {
    getPrefix,
    setPrefix
}