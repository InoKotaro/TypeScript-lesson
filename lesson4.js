"use strict";
// ４８- classを定義してオブジェクトを作成
class Person48 {
    // constructor（予約語）でオブジェクト作成時に実行する関数
    constructor(User_name, User_age) {
        this.name = User_name;
        this.age = User_age;
    }
}
const bob48 = new Person48('Bob', 120);
console.log(bob48);
// ４９- JSにコンパイルされたclass
// ES5 => コンストラクタ関数, ES6 => クラス構文（クラス使用でname: string;）が削除されてコンパイルされる
// ５０- クラスにメソッドを追加する方法 -this
class Person50 {
    constructor(User_name) {
        this.name = User_name;
    }
    greeting() {
        console.log(`Hello! My name is ${this.name}.`);
    }
}
const bob50 = new Person50('Bob');
bob50.greeting();
