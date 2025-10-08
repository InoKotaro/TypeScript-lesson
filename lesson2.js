let hasVehicle = true;
let count = 10;
let negative = -0.5;
let float = 3.14;
let hello = 'hello';
const person = {
    name: 'Jack',
    age: 27,
};
console.log(person.name);
//１８-配列に型をつける
const fruits = ['Apple', 'Banana', 'Grape'];
console.log(fruits);
//１９-Tuple型で配列作成
const book = ['business', 1500, false];
console.log(book);
//２０-Enum型で特定まとまったグループ限定で受け入れる列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
const coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
//２１-any型は型自体を不適用化
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
//２２-union型で複数型を使う
let unionType = 7;
let unionTypes = [77, 'hello'];
//２３-Literal型で値を特定化 ＝＞ Enum型よりLiteral型推奨
// constはデフォルト（自動）でLiteral型になる、letはString型になる
// 右辺'apple'以外はエラー
const apple = 'apple';
let clothSize = 'large';
// 明示的に指定
const cloth = {
    color: 'white',
    size: 'medium',
};
let clothSize_ = 'large';
// 明示的に指定
const cloth_ = {
    color: 'white',
    size: 'medium',
};
// ２５-関数に型を適応させる
function add(num1, num2) {
    return num1 + num2;
}
add(1, 2);
// ２６-関数の戻り値にvoid型を使う ＝＞　voidは何も返さない型
function sayHello() {
    console.log('Hello');
}
// ２７-undefined型,null型
// undefined型,null型ともに値は代入不可
let tmp = undefined;
let tmp2 = null;
// ※関数に型は => で指定する
// ２８-関数型を使って、特定の関数のみを代入できる変数
const anotherAdd = add;
// 無名関数パターン
const anotherAdd_ = function (n1, n2) {
    return n1 + n2;
};
// ２９-callback関数に型をつける
function doubleAndHandle(num, cb) {
    const doubleNum = cb(num * 2);
    console.log('２９-callback関数に型をつける');
    console.log(doubleNum);
}
doubleAndHandle(50, (r) => {
    return r;
});
// ３０-unknown型で柔軟なany型より厳しく型定義
let unknownInput;
let anyInput;
let text;
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
7;
// "7" satisfies number; ではエラーになる
// ３２-never型で起こり得ない型を使用
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
export {};
