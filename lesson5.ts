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

const dev67 = new Developer67('Katherine', 34, 9);
dev67.greeting('67-test');

// ６８- TypeScriptの構造的部分型
interface Human68 {
  name: string;
  age: number;
  greeting(message: string): void;
}

class Developer68 implements Human68 {
  constructor(
    public name: string,
    public age: number,
    public experience: number,
  ) {}

  greeting(message: string) {
    console.log(message);
    console.log(this.name, this.age, this.experience);
  }
}

// クラスを使わず、直接オブジェクトでHuman68の構造作成
const tmpDeveloper68 = {
  name: 'Jack',
  age: 38,
  experience: 5,
  greeting(message: string) {
    console.log(message);
    console.log(this.name, this.age, this.experience);
  },
};

// Human68型の変数にDeveloper68インスタンスを代入
const user68: Human68 = new Developer68('Bob', 50, 30);
// Human68型の変数にtmpDeveloper（構造が一致するためエラーなし）を代入
const user68_2: Human68 = tmpDeveloper68;
user68.greeting('68-test');
user68_2.greeting('68_2-test');

// ６９- readonly修飾子をinterfaceに使って読むだけのプロパティを作成
interface Human69 {
  readonly name: string;
  age: number;
  greeting(message: string): void;
}

// implementsで継承してるDeveloper69にあるオブジェクトにはHuman69で設定してるreadonly影響しない
class Developer69 implements Human69 {
  constructor(
    public name: string,
    public age: number,
    public experience: number,
  ) {}

  greeting(message: string) {
    console.log(message);
    console.log(this.name, this.age, this.experience);
  }
}

const tmpDeveloper69 = {
  name: 'Jack',
  age: 38,
  experience: 5,
  greeting(message: string) {
    console.log(message);
    console.log(this.name, this.age, this.experience);
  },
};

// readonlyでも代入を経由すれば書換え可能
let user69: Human69 = new Developer69('Bob', 50, 30);
user69 = tmpDeveloper69;
user69.greeting('69-readonly-test');
