var hasVehicle = true;
var count = 10;
var negative = -0.5;
var float = 3.14;
var hello = 'hello';
var person = {
    name: 'Jack',
    age: 27,
};
console.log(person.name);
//１８-配列に型をつける
var fruits = ['Apple', 'Banana', 'Grape'];
console.log(fruits);
//１９-Tuple型で配列作成
var book = ['business', 1500, false];
console.log(book);
//２０-Enum型で特定まとまったグループ限定で受け入れる列挙型
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize[CoffeeSize["SHORT"] = 0] = "SHORT";
    CoffeeSize[CoffeeSize["TALL"] = 1] = "TALL";
    CoffeeSize[CoffeeSize["GRANDE"] = 2] = "GRANDE";
    CoffeeSize[CoffeeSize["VENTI"] = 3] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL,
};
//２１-any型は型自体を不適用化
var anything = true;
anything = 'hello';
anything = ['hello', 33, true];
//２２-union型で複数型を使う
var unionType = 7;
var unionTypes = [77, 'hello'];
//２３-Literal型で値を特定化 ＝＞ Enum型よりLiteral型推奨
// constはデフォルト（自動）でLiteral型になる、letはString型になる
// 右辺'apple'以外はエラー
var apple = 'apple';
var clothSize = 'large';
// 明示的に指定
var cloth = {
    color: 'white',
    size: 'medium',
};
var clothSize_ = 'large';
// 明示的に指定
var cloth_ = {
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
var tmp = undefined;
var tmp2 = null;
// ※関数に型は => で指定する
// ２８-関数型を使って、特定の関数のみを代入できる変数
var anotherAdd = add;
// 無名関数パターン
var anotherAdd_ = function (n1, n2) {
    return n1 + n2;
};
// ２９-callback関数に型をつける
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    console.log('２９-callback関数に型をつける');
    console.log(doubleNum);
}
doubleAndHandle(50, function (r) {
    return r;
});
