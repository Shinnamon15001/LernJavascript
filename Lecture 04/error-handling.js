function criticalCode() {
    throw("Throw an exception");
}

function logError(theException) {
    console.log(theException);
}

console.log("\n ************** Try Catch *************** \n");

try {
    criticalCode();
}catch(ex) {
    console.log("Got an error!")
    logError(ex);
}

console.log("\n ************** Throwing in try Catch *************** \n");

try {
    criticalCode();
}catch(ex) {
    console.log("Got an Error!")
    logError(ex);
}finally {
    console.log("Code that always will run...")
}

function hello() {
    console.log("\n *********** Throwing exception ************ \n")
}