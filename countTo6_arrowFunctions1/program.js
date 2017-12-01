let inputs = process.argv.slice(2);
let results = inputs.map(x => x.charAt(0))
.reduce((x,y) => {
    return x+y;
    });
console.log(`[${inputs}] becomes "${results}"`);