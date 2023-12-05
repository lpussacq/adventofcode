const puzzle = require('../file.js');

function calibrationValue(data) {
    const letter = /[a-zA-Z]/g
    return data
        .split(/\r?\n/)
        .map(line => line.replace(letter, ''))
        .map(digits => `${digits.slice(0, 1)}${digits.slice(-1)}`)
        .map(number => parseInt(number, 10))
        .reduce((acc, val) => acc + val, 0)
}

const letter = /[a-zA-Z]/g
const numbers = [{
    replacement: 'one1one',
    reg: /one/g
},{
    replacement: 'two2two',
    reg: /two/g
},{
    replacement: 'three3three',
    reg: /three/g
},{
    replacement: 'four4four',
    reg: /four/g
},{
    replacement: 'five5five',
    reg: /five/g
},{
    replacement: 'six6six',
    reg: /six/g
},{
    replacement: 'seven7seven',
    reg: /seven/g
},{
    replacement: 'eight8eight',
    reg: /eight/g
},{
    replacement: 'nine9nine',
    reg: /nine/g
}]

function calibration(data) {
    return data
        .split(/\r?\n/)
        .map(line => numbers.reduce((acc, val) => acc.replace(val.reg, val.replacement) , line))
        .map(line => line.replace(letter, ''))
        .map(digits => `${digits.slice(0, 1)}${digits.slice(-1)}`)
        .map(number => parseInt(number, 10))
        .reduce((acc, val) => acc + val, 0)
}

puzzle('./input.txt', calibration);
