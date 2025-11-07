"use strict";
const human65 = {
    name: 'Bob',
    age: 30,
};
let developer65;
const human66 = {
    name: 'Bob',
    age: 30,
    greeting(message) {
        console.log(message);
    },
};
// implements を書くと Developer67 で Human67 内にあるname型, age型を少なくとも一致してるか検査可能
class Developer67 {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
    }
}
const dev = new Developer67('Katherine', 34, 9);
dev.greeting("test");
