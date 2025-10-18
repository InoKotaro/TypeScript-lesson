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

// ５０- クラスにメソッドを追加する方法 -this
class Person50 {
  name: string;

  constructor(User_name: string) {
    this.name = User_name;
  }

  greeting(this: {name: string}) {
    console.log(`Hello! My name is ${this.name}.`);
  }
}

const bob50 = new Person50('Bob');
bob50.greeting();
