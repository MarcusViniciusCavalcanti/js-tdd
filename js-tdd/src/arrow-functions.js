const ireland  = ['Dublin', 'Galway', 'Cork'];


const love = ireland.map(function (name) {
    return `I love ${name}!`;
});

console.log(`love function: ${love}`);

const loveArrow = ireland.map((name) => {
    return `I love ${name}!`;
});

console.log(`loveArrow function: ${loveArrow}`);

const loveSingle = ireland.map(name => {
    return `I love ${name}!`;
});

console.log(`loveSingle function: ${loveSingle}`);

const loveOnline = ireland.map(name => `I love ${name}!`);

console.log(`loveOnline function: ${loveOnline}`);

const loveChain = ireland
    .filter(name => name === 'Dublin')
    .map(name => `I love ${name}!`);

console.log(`loveChain function: ${loveChain}`);


//----------------------------------------------------------



