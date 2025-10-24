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
// ==============未プッシュ、５１書き足し
// ５０- classを定義してオブジェクトを作成する方法
// クラスとは、オブジェクトの設計図でUserクラスを作ると、その型のオブジェクトを量産できる
class User50 {
    // コンストラクタ（初期化メソッド）
    constructor(name, age) {
        this.name = name; // this は作成中のオブジェクトを指す
        this.age = age;
    }
    // メソッド（関数）
    greet() {
        console.log(`こんにちは、${this.name}です。${this.age}歳です。`);
    }
}
const user1 = new User50('ユーザー１', 100);
user1.greet();
// こんにちは、ユーザーです。200歳です。 と出力
// 設計図（クラス）から、いくつでもオブジェクト作成可能
const user2 = new User50('ユーザー２', 200);
const user3 = new User50('ユーザー３', 300);
user2.greet();
user3.greet();
// こんにちは、ユーザー２です。200歳です。
// こんにちは、ユーザー３です。300歳です。 と出力
// TypeScriptでは、クラス自体を型としても使用可能
let user; // User型の変数として定義
user = new User50("ユーザー４", 400);
user.greet();
// Userクラスのインスタンスを代入
// ※変数に代入しなくてもクラスは使える
new User50('ユーザー５', 500).greet();
