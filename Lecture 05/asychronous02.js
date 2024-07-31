function promiseTimeout(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
    });
}

async function run() {
    console.log("Start!");

    await promiseTimeout(2000);
    console.log("Stop!!")
    const response = longRunningOperation();
    console.log(response);

    
}

async function longRunningOperation() {
    return 42;
}

console.log("Before run");
run();
console.log("After run");