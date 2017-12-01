const city = 'Dublin';
const something = 'Guinness';
const otherThing = 'Leprechaums';

function tagged(template, ...values ) {
    return template.reduce(( accumulator, part, counter ) => {
        return `${accumulator} \x1b[36m${values[counter - 1].toUpperCase()}\x1b[5m ${part}`
    })
}

const ireland = tagged `I live in ${city} the city of ${something} and ${otherThing}!`;

console.log(ireland);