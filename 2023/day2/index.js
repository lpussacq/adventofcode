const puzzle = require('../file')

function color(set, regex) {
    const results = set.matchAll(regex);
    for(const match of results) {
        return parseInt(match.groups.nb, 10)
    }

    return 0;
}

function game(line, index) {
    const red = /(?<nb>\d+) red/g
    const blue = /(?<nb>\d+) blue/g
    const green = /(?<nb>\d+) green/g

    const sets = line.split(':')[1].split(';')
    return {
        idx: index + 1,
        sets: sets.map(set => ({
            red: color(set, red),
            green: color(set, green),
            blue: color(set, blue)
        }))
    }
}

function valid(dataSet) {
    const max = {
        red: 12,
        green: 13,
        blue: 14
    }

    for (const set of dataSet.sets) {
        if (set.red > max.red || set.blue > max.blue || set.green > max.green) {
            return false
        }
    }

    return true
}

function max(power, set) {
    return {
        red: Math.max(set.red, power.red),
        blue: Math.max(set.blue, power.blue),
        green: Math.max(set.green, power.green),
    }
}

function play(data) {
    return data
        .split(/\r?\n/)
        .map(game)
        .filter(valid)
        .map(dataSet => dataSet.idx)
        .reduce((acc, val) => val + acc, 0)
}

function play2(data) {
    return data
        .split(/\r?\n/)
        .map(game)
        .map(gameSets => gameSets.sets)
        .map(sets => sets.reduce(max, { red: 0, green: 0, blue: 0 }))
        .map(max => max.red * max.blue * max.green)
        .reduce((acc, val) => val + acc, 0)
}

puzzle('input.txt', play2)