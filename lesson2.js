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
var coffeeSize;
(function (coffeeSize) {
    coffeeSize["SHORT"] = "SHORT";
    coffeeSize["TALL"] = "TALL";
    coffeeSize["GRANDE"] = "GRANDE";
    coffeeSize["VENTI"] = "VENTI";
})(coffeeSize || (coffeeSize = {}));
var coffee = {
    hot: true,
    size: coffeeSize.TALL,
};
