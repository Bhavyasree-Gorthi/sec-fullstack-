const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter principal amount: ", (principle) => {
    readline.question("Enter annual interest rate (in %): ", (rate) => {
        readline.question("Enter number of years: ", (years) => {
            principle = parseFloat(principle);
            rate = parseFloat(rate);
            years = parseFloat(years);

            // Compound Interest formula: A = P * (1 + r/100)^n
            const amount = principle * Math.pow((1 + rate / 100), years);
            const ci = amount - principle;

            console.log(`Compound Interest after ${years} years: ${ci.toFixed(2)}`);
            readline.close();
        });
    });
});

