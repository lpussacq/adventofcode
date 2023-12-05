const fs = require('fs');

function puzzle(filename, resolution) {
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
    
        const response = resolution(data);
        console.log(response)
    })
}

module.exports = puzzle