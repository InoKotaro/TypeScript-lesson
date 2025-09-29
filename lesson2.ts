let hasVehicle = true;
let count: number = 10;
let negative: number = -0.5;
let float: number = 3.14;
let hello: string = "hello";

const person: {
    name: string;
     age: number;
    } = {
    name: "Jack",
    age:27
}

console.log(person.name);

//１８-配列に型をつける
const fruits = ["Apple", "Banana", "Grape"];
console.log(fruits);

//１９-Tuple型で配列作成
const book: [string, number, boolean] = ["business", 1500, false];
console.log(book);