const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    result = '';
    [...str].forEach(e => {
        result += (e.toUpperCase() === e) ? e.toLowerCase() : e.toUpperCase();
    })
    console.log(result);
});