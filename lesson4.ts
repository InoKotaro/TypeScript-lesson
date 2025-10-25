// ４８- classを定義してオブジェクトを作成
class Person48 {
  name: string;
  private age: number;
  // constructor（予約語）でオブジェクト作成時に実行する関数
  constructor(User_name: string, User_age: number) {
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
  // プロパティ（メンバー変数）
  name: string;
  age: number;

  // コンストラクタ（初期化メソッド）
  constructor(name: string, age: number) {
    this.name = name; // this は作成中のオブジェクトを指す
    this.age = age;
  }

  // メソッド（関数）
  greet() {
    console.log(`５０-こんにちは、${this.name}です。${this.age}歳です。`);
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

let user: User50; // User型の変数として定義
user = new User50('ユーザー４', 400); // Userクラスのインスタンスを代入
user.greet();

// ※変数に代入しなくてもクラスは使える
new User50('ユーザー５', 500).greet();

// ５１- コンパイルされるとclassはどう書き換わるか
// JavaScript のクラス構文または関数ベースのプロトタイプ構文に変換される
// 型注釈（: string など）はコンパイル時にすべて消え、純粋な JavaScript 構文のみへ書き換わる

// ５２- クラスにメソッドを追加する方法 -this
class Person52 {
  name: string;

  constructor(User_name: string) {
    this.name = User_name;
  }

  greeting(this: { name: string }) {
    console.log(`５２-Hello! My name is ${this.name}.`);
  }
}

const bob52 = new Person52('Bob');
bob52.greeting();

// ５３- クラスを型として使う

// // 🔻 メソッドを変数に代入すると this が失われる========
// const greet = p.greeting;
// greet(); // ❌ 実行時エラー（thisがundefined）
// =====================================================

class Person53 {
  name: string;

  constructor(User_name: string) {
    this.name = User_name;
  }

  // thisで型を明示しておくことで、誤った使い方を防ぐための保険になる
  greeting(this: Person53) {
    console.log(`５３-Hello! My name is ${this.name}.`);
  }
}

const bob53 = new Person53('Bob');
bob53.greeting();

// ５４- public修飾子とprivate修飾子を使用で、アクセスを制限
// public修飾子はデフォルトで設定されてる、明示的に書いても可
// private修飾子でクラス範囲外でageで書換え防止
class Person54 {
  name: string;
  private age: number;

  constructor(User_name: string, User_age: number) {
    this.name = User_name;
    this.age = User_age;
  }

  incrementAge() {
    this.age++;
  }

  greeting(this: Person54) {
    console.log(`５４-Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

const bob54 = new Person54('Bob', 30);
bob54.greeting();
bob54.incrementAge();
// 1歳加算されて表示
bob54.greeting();

// ５５- 初期化の処理を省略する
// constructor内に public修飾子 or private修飾子＋型 を書けば可
class Person55 {
  constructor(
    public name: string,
    private age: number,
  ) {}

  incrementAge() {
    this.age++;
  }

  greeting(this: Person55) {
    console.log(`５５-Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

const bob55 = new Person55('Bob', 30);
bob55.greeting();
bob55.incrementAge();
// 1歳加算されて表示
bob55.greeting();
