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

// ５６- readonly修飾子 を使って書き換え出来ないようにする、書き換える必要がない変数に書く
// public or private or readonly どれかは書く必要あり
class Person56 {
  constructor(
    public readonly name: string,
    private age: number,
  ) {}

  incrementAge() {
    this.age++;
  }

  greeting(this: Person56) {
    console.log(`５６-Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

const bob56 = new Person56('Bob', 30);
bob56.greeting();
bob56.incrementAge();
// 1歳加算されて表示
bob56.greeting();

// ５７- extendsを使用して他クラス機能を継承する
class Person57 {
  constructor(
    public readonly name: string,
    private age: number,
  ) {}

  incrementAge() {
    this.age++;
  }

  greeting(this: Person57) {
    console.log(`５７-Hello! My name is ${this.name}. I am ${this.age} years old.`);
  }
}

class Teacher57 extends Person57 {
  constructor(
    name: string,
    age: number,
    public subject: string,
  ) {
    super(name, age);
  }
}

// Person57クラスを継承してあるTeacher57クラスを使用
const teacher57 = new Teacher57('Bob', 30, 'Math');
teacher57.greeting();

// ５８- protected修飾子を使用して、継承先までアクセス可能範囲を広げる、それ以降は制限あり
class Person58 {
  constructor(
    public readonly name: string,
    protected age: number,
  ) {}

  incrementAge() {
    this.age++;
  }

  greeting(this: Person58) {
    console.log(`５８-Hello! My name is ${this.name}. I am ${this.age} years old. `);
  }
}

class Teacher58 extends Person58 {
  constructor(
    name: string,
    age: number,
    public subject: string,
  ) {
    super(name, age);
  }
  greeting() {
    console.log(
      `５８-Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject}.`,
    );
  }
}

// Person58クラスを継承してあるTeacher58クラスを使用
const teacher58 = new Teacher58('Bob', 30, 'Math');
teacher58.greeting();

// ５９- ゲッターとセッター使い方
// クラス内で
// ゲッター（getter） → 値を「取得」するためのメソッド
// セッター（setter） → 値を「設定」するためのメソッド
// を用意して、外部から直接プロパティに触らないようにする
class Person59 {
  constructor(
    public readonly name: string,
    protected age: number,
  ) {}

  incrementAge() {
    this.age++;
  }

  greeting(this: Person59) {
    console.log(`５９-Hello! My name is ${this.name}. I am ${this.age} years old. `);
  }
}

class Teacher59 extends Person59 {
  // 値を292行目で代入時にset起動
  set subject(value: string) {
    this._subject = value;
  }

  // 値を291,293行目で取得時にget起動
  get subject_() {
    return this._subject;
  }

  constructor(
    name: string,
    age: number,
    private _subject: string,
  ) {
    super(name, age);
  }
  greeting() {
    console.log(
      // 282行目内this.subject_ は 264行目get subject_ を起動させてる
      `５９-Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject_}.`,
    );
  }
}

// Person59クラスを継承してあるTeacher59クラスを使用
const teacher59 = new Teacher59('Bob', 30, 'Math');
console.log(teacher59.subject_);
teacher59.subject = 'English';
console.log(teacher59.subject_);
// console.log(teacher59._subject);  277行目をpublicにすればコンソール表示蚊
teacher59.greeting();

// ６０- staticを使用して、インスタンスを作らずにクラスを使う
// クラスに属するが、インスタンスには属さない設定をする際に使う

// Q:なぜクラスに属するが、インスタンスには属さない設定が必要なのか？
// A:社員クラスで言うと
// ▷全員同じ「AI株式会社」という情報を持っている
// ▷メモリ的にも非効率
// ▷もし社名が変わると、全インスタンスを更新する必要がある
// から必要

class Person60 {
  static country = 'America';
  static isAdult(age: number) {
    if (age >= 20) return true;

    return false;
  }

  constructor(
    public readonly name: string,
    protected age: number,
  ) {}

  incrementAge() {
    this.age++;
  }

  greeting(this: Person60) {
    console.log(`６０-Hello! My name is ${this.name}. I am ${this.age} years old. `);
  }
}

class Teacher60 extends Person60 {
  set subject(value: string) {
    this._subject = value;
  }

  get subject_() {
    return this._subject;
  }

  constructor(
    name: string,
    age: number,
    private _subject: string,
  ) {
    super(name, age);
  }
  greeting() {
    console.log(
      `６０-Hello! My name is ${this.name}. I am ${this.age} years old. I teach ${this.subject_}.`,
    );
  }
}

const teacher60 = new Teacher60('Bob', 30, 'Math');
console.log(teacher60.subject_);
teacher60.subject = 'English';
console.log(teacher60.subject_);
teacher60.greeting();

console.log(Person60.country);

// ６１- Abstractクラスを使用して、継承にのみ使えるクラスを作成
// 抽象クラスは、継承されるためのクラスで、インスタンス化できない
// 継承するためだけに作成するクラスと考える
abstract class Person61 {
  static country = 'America';
  static isAdult(age: number) {
    if (age >= 20) return true;

    return false;
  }

  constructor(
    public readonly name: string,
    protected age: number,
  ) {}

  incrementAge() {
    this.age++;
  }

  greeting(this: Person61) {
    console.log(`６１-Hello! My name is ${this.name}. I am ${this.age} years old. `);
    this.explainJob();
  }

  abstract explainJob(): void;
}

class Teacher61 extends Person61 {
  explainJob() {
    console.log(`I am a teacher. I teach ${this.subject_}`);
  }

  set subject(value: string) {
    this._subject = value;
  }

  get subject_() {
    return this._subject;
  }

  constructor(
    name: string,
    age: number,
    private _subject: string,
  ) {
    super(name, age);
  }
}

const teacher61 = new Teacher61('Katherine', 30, 'Social Studies');
teacher61.greeting();
