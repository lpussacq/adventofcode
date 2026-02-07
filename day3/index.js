const puzzle = require('../file')

function partNumber(data) {
    const lines = data.split(/\r?\n/)
    let part = [];
    for(let y=0; y<lines.length; y++) {
        const line = lines[y]
        for(let x=0; x<line.length; x++) {
            const char = line[x]
            if (isSymbol(char)) {

            }
        }
    }
}

puzzle('input.txt', partNumber)