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