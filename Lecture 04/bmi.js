const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter your name: ", (name) => {
    rl.questoin("Enter your weight (in kg): ", (weight) => {
        rl.question("Enter your height(in cm)", (height) => {
            
        })
    })
})