// ７６- AかつBのように、&を用いてインターセクション型を定義(ユニオン型(記号：|)=> または)
type Engineer76 = {
  name: string;
  role: string;
};

type Blogger76 = {
  name: string;
  follower: number;
};

// name,role,follower全部揃ってないとエラー
type EngineerBlogger76 = Engineer76 & Blogger76;
const bob76: EngineerBlogger76 = {
  name: 'Ellie',
  role: 'server-side',
  follower: 100,
};

type NumberBoolean76 = number | boolean;
type StringNumber76 = string | number;
// 共通してるnumberがgeneralにはいる
type general76 = NumberBoolean76 & StringNumber76;

// ７７- ３つのtype guardで型を絞り込む方法(Narrowing：ナローウィング)
// 各３つ演算子はJSに備わってる

let foo: string | number;
foo = 'hello';

// type guardは実行中の値の型までは分からないので、安全にコードを書くためのヒント（ガード）を作るイメージ
function myFunc(x: string | null) {
  if (x === null) {
    return x;
  }
  return x;
}

type Engineer77 = {
  name: string;
  role: string;
};

type Blogger77 = {
  name: string;
  follower: number;
};

// name,role,follower全部揃ってないとエラー
type EngineerBlogger77 = Engineer77 & Blogger77;
const Ellie77: EngineerBlogger77 = {
  name: '1⃣ Ellie',
  role: '1⃣ server-side',
  follower: 100,
};

type NumberBoolean77 = number | boolean;
type StringNumber77 = string | number;
// 共通してるnumberがgeneralにはいる
type general77 = NumberBoolean77 & StringNumber77;

// 1⃣ typeof演算子で具体的な型に絞れる
function toUpperCase(x: string | null) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return '';
}

// 2⃣ in演算子でオブジェクトが特定のプロパティを持つかどうかで型を絞れる
// (nomadWorker.と入力で候補に出てくる)
type NomadWorker77 = Engineer77 | Blogger77;

function describeProfile(nomadWorker: NomadWorker77) {
  console.log(nomadWorker.name);
  if ('role' in nomadWorker) {
    console.log(nomadWorker.role);
  }
  if ('follower' in nomadWorker) {
    console.log(nomadWorker.follower);
  }
}

describeProfile(Ellie77);

// 3⃣instanceof演算子で特定クラスのインスタンスかどうかを判定して型ガードとして利用できる
class cat77 {
  // ７８-タグ付きUnionで型を限定化
  kind: 'cat' = 'cat';

  speak() {
    console.log('3⃣ meow');
  }
}

class bird77 {
  // ７８-タグ付きUnionで型を限定化
  kind: 'bird' = 'bird';

  speak() {
    console.log('3⃣ tweet');
  }

  fly() {
    console.log('3⃣ flutter');
  }
}

type Pet77 = cat77 | bird77;

function havePet(pet: Pet77) {
  // speakメソッドは共通
  pet.speak();
  // ７８-タグをつけるとswitch文で限定も可能
  switch (pet.kind) {
    case 'bird':
      pet.fly();
  }
  if (pet instanceof bird77) {
    // flyメソッドはbird77だけなのでinstanceof使用でチェック
    pet.fly();
  }
}

// new cat77(),new bird77() 的なクラスから生成されたinstanceである必要がある
// でないと反映されない
havePet(new cat77());
havePet(new bird77());

// ７９- 型アサーション(as)を使って、手動で型を上書き
const input = <HTMLInputElement>document.getElementById('input');

input.value = 'initial input value';

// ７９- jsxファイルで推奨
const inputAS = document.getElementById('input') as HTMLInputElement;
// ８０- !(Non-null assertion operator)を式文末に書くと、式がnullまたはundefinedではないと断言可能
// ８０- const inputAS = document.getElementById('input')!;
inputAS.value = 'initial input value';

// ７９- jsxファイル推奨と一緒（括弧を忘れないように）
(document.getElementById('input') as HTMLInputElement).value = 'initial input value';

// ８１- インデックスシグネチャを使用して柔軟なオブジェクトを作る方法 - noUncheckedIndexedAccess
interface Designer {
  name: string;
  [example: string]: string;
}

const designer: Designer = {
  name: 'Catherine',
  role: 'backend',
};

// ８３- Optional Chaining<オプショナル・チェイニング>使い方
interface downloadFile {
  id: number;
  user?: {
    name?: {
      first: string;
      last: string;
    };
  };
}

const downloadFile: downloadFile = {
  id: 1,
  user: {
    name: {
      first: 'John',
      last: 'Doe',
    },
  },
};

// ８３- ?を書くと use,nameがないときはエラーにならず途中で undefined を返して安全にアクセスできる
console.log(downloadFile.user?.name?.first);
const userName = downloadFile.user ?? 'no-user';

// ８５- LookUp型(インデックスアクセス型)を使ってプロパティの型を取得
type id = downloadFile['id'];

// ８４- Nullish Coalescing<ナリッシュ・コアレッシング>使い方
// downloadFile.user が undefined か null であれば右辺を返す
// || と違いは undefined か null で限定されてる点
const userFile = downloadFile.user ?? 'no-name';

let test = 'name';
// designer[test]に入る値が undefined の可能性があるため安全策として ? を書く
designer[test]?.toUpperCase();

// ８２- 関数のオーバーロードを使って、戻り値の型を正しくTypeScriptに伝える
// 実際の返り値は string または number のどちらかだが、 TypeScript が認識する返り値の型は string | number → ユニオン型
// ※書く順番要注意

// ※as stringでupperHelloがstring型に指定するのも方法としてはある
// オーバーロード → 呼び出し時の型が正確に確定する
// Union → 1つの関数で済むが、呼び出し時の型推論が弱い
function toUpperCase83(x: string): string;
function toUpperCase83(x: number): number;
// 上記がなくてもエラーにはならないが正確な string型ではなくstring | numberでUnion型で返る → 正確な型推論が欲しい場合はオーバーロードを使う

function toUpperCase83(x: string | number): string | number {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return x;
}
const upperHello = toUpperCase('hello');

// ８８- オーバーロードを型で表現する書く必要がある
// オーバーロード全関数に対応する関数を書く
interface toUpperCaseOverload {
  (x: string): number;
  (x: number): number;
}

// string と number へ対応できる toUpperCase83 を upperHello88定数 へ代入
const upperHello88: toUpperCaseOverload = function (x: string | number) {
  return 0;
};

// ８９- 関数型のインターセクション（関数かつ関数）はオーバーロードになる
// interface FuncA {
//   (a: number, b: string): number;
//   (a: string, b: number): number;
// }

// interface FuncB {
//   (a: string): number;
// }

// let intersectionFunc: FuncA & FuncB = function (a: number | string, b?: string | number) {
//   return 0;
// }

// ９０- 関数型のユニオン型はパラメータがインターセクション型、戻り値はユニオン型になる
interface FuncA {
  (a: number): number;
  (a: string): number;
}

interface FuncB {
  (a: string): number;
}

let unionFunc: FuncA | FuncB;
unionFunc = function (a: number | string) {
  return 0;
};

// ８６- 型の互換===============================================
// 1⃣文字列リテラル
// 型構造が一致していれば互換性がある
let targetHello = 'hello';
let sourceHello: 'hello' = 'hello';
targetHello = sourceHello;

// ───────────────────────────────

// 2⃣Enum型
enum Color {
  RED,
  GREEN,
  BLUE,
}

let targetColor = Color.RED;
let sourceColor = 100;

// 互換性があるためエラーにならない
// enumは違う名前で型が作られていれば別型として扱われる => 名前的型付け
targetColor = sourceColor;
targetColor = Color.BLUE;
// ───────────────────────────────

// 3⃣関数
let targetFunction = function (a: string, b: string) {};
let sourceFunction = function (a: string) {};
// TSは型構造が一致していればエラーにならない
// 必要な分が渡ればよいって考え => 上記例では a: string が渡ればよいためエラーにならない、b: string は sourceFunction側 で最初から存在しないだけ
// 引数が少ない（制限が弱い）関数を、引数が多い（制限が強い）関数の型に代入可
targetFunction = sourceFunction;
targetFunction('hi', 'hello');

// privateなど制限をつけると代入不可になる
class AdvancedPerson {
  name: string = 'Catherine';
  age: number = 27;
}

class AdvancedCity {
  name: string = 'NewYork';
  age: number = 100;
}

let targetPerson = new AdvancedPerson();
let sourceCity = new AdvancedCity();
targetPerson = sourceCity;

// ============================================================

// ８７- TypeScriptの型安全性、JavaScriptの柔軟性
// string × string => string
// string × number => number
// などに型推論される

// ９１- レストパラメーターに配列やタプルを指定する方法 - labeled tuple
// タプル（配列に並び順まで型で決める）で[number, string, boolean]を指定すると引数が(0, "hello", true)にならないとエラー
function advancedFnA(...args: number[]) {}
advancedFnA(0, 1, 2, 3);

// オプショナルパラメータも使用可（配列の最後に書く必要）
// 配列にレストパラメーターを最後に入れる際は
function advancedFnB(...args: [Number, string, boolean?, ...number[]]) {}
advancedFnB(0, 'hello', true, 1, 2, 3, 4, 5, 6);

// ９２- 配列とタプルにreadonly修飾子をつける
// args は 読み取り専用タプル になるため args を変更できなくなる
function advancedFnC(...args: readonly [Number, string, boolean?, ...number[]]) {}
advancedFnC(0, 'hello', true, 1, 2, 3, 4, 5, 6);
// args[0] = 1; はエラー
// args.push(10); はエラー
// push, pop, splice などの破壊的操作がすべて禁止される