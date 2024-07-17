let values1 = ['Apple', 1, false];
let values2 = ['Fuies', 2, true];
let values3 = ['Mars', 9, 'Apple'];

const value = [];

for (let value1 of values1) {
    if (value != values1) {
        value.push(value1);  
    } else if (value == value1) {
        console.log(value1,"it's same")
    }
}
for (let value2 of values2) {
    if (value != values2) {
        value.push(value2);
   } else if (value == value2) {
        console.log(value2,"it's same")
    }
}
for (let value3 of values3) {
    if (value != values3) {
        value.push(value3);
   } else if (value == value3) {
        console.log(value3,"it's same")
    }
}

console.log(value);

