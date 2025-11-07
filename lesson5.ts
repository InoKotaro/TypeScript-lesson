// ６５- interface使い方
// オブジェクトやクラスがどんな形をしているか を定義するときに使う
// typeとinterface違いは、typeはなんでも｜interfaceはオブジェクトだけ使える
// interfaceメリットは interface Human と書けば Human がオブジェクトと分かりやすい
// interfaceで型を一回設定しておいて、各変数に型を適用する
interface Human65 {
  name: string;
  age: number;
}

const human65: Human65 = {
  name: 'Bob',
  age: 30,
};

let developer65: Human65;

// ６６- メソッドをオブジェクトの型に指定
interface Human66 {
  name: string;
  age: number;
  greeting(message: string): void;
}

const human66: Human66 = {
  name: 'Bob',
  age: 30,
  greeting(message: string) {
    console.log(message);
  },
};

// ６７- implementsを使用して、クラスに対してinterfaceの条件を適応させる
// abstractは継承元でクラスを作成する必要あり、対してimplementsは単に型だけ指定
interface Human67 {
  name: string;
  age: number;
  greeting(message: string): void;
}

// implements を書くと Developer67 で Human67 内にあるname型, age型を少なくとも一致してるか検査可能
class Developer67 implements Human67 {
  constructor(
    public name: string,
    public age: number,
    public experience: number,
  ) {}

  greeting(message: string) {
    console.log(message);
  }
}

const dev = new Developer67('Katherine', 34, 9);
dev.greeting("test");
