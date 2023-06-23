const { writeFileSync } = require('fs')

const resultAdapter = (result) => { 
    return typeof(result) === string ? result : 'Not a string'
}

const logResults = (result ) => {
    writeFileSync('result-logs.json', resultAdapter(result), 'utf8', '-a')
}

module.exports = {
    logResults
}