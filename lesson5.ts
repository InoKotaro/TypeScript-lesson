// ６５- interface使い方
// オブジェクトやクラスがどんな形をしているか を定義するときに使う
// typeとinterface違いは、typeはなんでも｜interfaceはオブジェクトだけ使える
// interfaceメリットは interface Human と書けば Human がオブジェクトと分かりやすい
// interfaceで型を一回設定しておいて、各変数に型を適用する
interface Human {
  name: string;
  age: number;
}

const human: Human = {
  name: 'Bob',
  age: 30,
};

let developer: Human;
