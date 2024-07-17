const cat = {
    name: "Pipey",
    age: 8,
    whatName(){
        return [this.name,this.age];
    },
};

console.log(cat.whatName());
