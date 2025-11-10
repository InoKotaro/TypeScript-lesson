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
const dev67 = new Developer67('Katherine', 34, 9);
dev67.greeting('67-test');
class Developer68 {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
        console.log(this.name, this.age, this.experience);
    }
}
// クラスを使わず、直接オブジェクトでHuman68の構造作成
const tmpDeveloper68 = {
    name: 'Jack',
    age: 38,
    experience: 5,
    greeting(message) {
        console.log(message);
        console.log(this.name, this.age, this.experience);
    },
};
// Human68型の変数にDeveloper68インスタンスを代入
const user68 = new Developer68('Bob', 50, 30);
// Human68型の変数にtmpDeveloper（構造が一致するためエラーなし）を代入
const user68_2 = tmpDeveloper68;
user68.greeting('68-test');
user68_2.greeting('68_2-test');
// implementsで継承してるDeveloper69にあるオブジェクトにはHuman69で設定してるreadonly影響しない
class Developer69 {
    constructor(name, age, experience) {
        this.name = name;
        this.age = age;
        this.experience = experience;
    }
    greeting(message) {
        console.log(message);
        console.log(this.name, this.age, this.experience);
    }
}
const tmpDeveloper69 = {
    name: 'Jack',
    age: 38,
    experience: 5,
    greeting(message) {
        console.log(message);
        console.log(this.name, this.age, this.experience);
    },
};
// readonlyでも代入を経由すれば書換え可能
let user69 = new Developer69('Bob', 50, 30);
user69 = tmpDeveloper69;
user69.greeting('69-readonly-test');
