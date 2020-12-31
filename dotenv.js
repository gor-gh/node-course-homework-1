const fs = require('fs');

const errorChecker = (line) => {
    if(line.trim()[0] === '#') return 1;
    if(line.trim() === '') return 1;
    if(line.indexOf('=') <= 0) return 1;
    return 0;
}

const config = (fileName) => {
    const data = fs.readFileSync(fileName).toString();
    const splittedData = data.split('\n');

    for(let envVar of splittedData) {
        if(errorChecker(envVar)) continue;
        
        const valuePair = envVar.split('=');
        
        process.env[valuePair[0]] = valuePair[1];
    }
}

module.exports = {
    config,
}