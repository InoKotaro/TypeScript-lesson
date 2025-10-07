let hasVehicle = true;
let count: number = 10;
let negative: number = -0.5;
let float: number = 3.14;
let hello: string = 'hello';

const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 27,
};

console.log(person.name);

//１８-配列に型をつける
const fruits = ['Apple', 'Banana', 'Grape'];
console.log(fruits);

//１９-Tuple型で配列作成
const book: [string, number, boolean] = ['business', 1500, false];
console.log(book);

//２０-Enum型で特定まとまったグループ限定で受け入れる列挙型
enum CoffeeSize {
  SHORT,
  TALL,
  GRANDE,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
};

//２１-any型は型自体を不適用化
let anything: any = true;
anything = 'hello';
anything = ['hello', 33, true];

//２２-union型で複数型を使う
let unionType: number | string = 7;
let unionTypes: (number | string)[] = [77, 'hello'];

//２３-Literal型で値を特定化 ＝＞ Enum型よりLiteral型推奨
// constはデフォルト（自動）でLiteral型になる、letはString型になる

// 右辺'apple'以外はエラー
const apple: 'apple' = 'apple';
let clothSize: 'small' | 'medium' | 'large' = 'large';
// 明示的に指定
const cloth: {
  color: string;
  size: 'small' | 'medium' | 'large';
} = {
  color: 'white',
  size: 'medium',
};

// ２４-typeエイリアスで複雑な型に別名をつけて変数的に使う
// ２３内にある 'small' | 'medium' | 'large' を type 使用で ClothSize へ代入化
type ClothSize = 'small' | 'medium' | 'large';
let clothSize_: ClothSize = 'large';
// 明示的に指定
const cloth_: {
  color: string;
  size: 'small' | 'medium' | 'large';
} = {
  color: 'white',
  size: 'medium',
};

// ２５-関数に型を適応させる
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(1, 2);

// ２６-関数の戻り値にvoid型を使う ＝＞　voidは何も返さない型
function sayHello(): void {
  console.log('Hello');
}

// ２７-undefined型,null型
// undefined型,null型ともに値は代入不可
let tmp: undefined = undefined;
let tmp2: null = null;

// ※関数に型は => で指定する
// ２８-関数型を使って、特定の関数のみを代入できる変数
const anotherAdd: (n1: number, n2: number) => number = add;

// 無名関数パターン
const anotherAdd_: (n1: number, n2: number) => number = function (n1: number, n2: number): number {
  return n1 + n2;
};

// ２９-callback関数に型をつける
function doubleAndHandle(num: number, cb: (num: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log('２９-callback関数に型をつける');
  console.log(doubleNum);
}

doubleAndHandle(50, (r) => {
  return r;
});

// ３０-unknown型で柔軟なany型より厳しく型定義
let unknownInput: unknown;
let anyInput: any;
let text: string;
anyInput = 'hello';
unknownInput = 'hello';
unknownInput = 7;
unknownInput = true;
// text = unknownInput; // unknown型 ＝＞ string型代入要注意
text = anyInput; // any型 ＝＞ string型に代入可能

// unknown型 ＝＞ string型代入 は typeof を使用（タイプガード）
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

// ３１-型チェックはsatisfies演算子を使う　
7 satisfies number;
// "7" satisfies number; ではエラーになる

