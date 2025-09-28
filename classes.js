//A class is like a blueprint
class Woman {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //A function inside the class
    welcome() {
        console.log(`Hiyaa, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

//Create a new person from the class 
let woman1 = new Woman("Phoebe", 15);
woman1.welcome();