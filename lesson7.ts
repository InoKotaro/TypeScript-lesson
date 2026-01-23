// ９８- ジェネリクスを使って、型を引数として受け取る
// valueは変数名、T自体はstring型を指す
// ９９- extendsを使って型パラメータに制約可能
// １００- keyofを使ってオブジェクトのキーのユニオン型を作成する方法

// T extends { name: string } => name プロパティを必ず持つオブジェクトに制約している
// U extends keyof T => value に存在しないキーは指定できないようにしている
// value: T  => Tはジェネリクスなので、呼び出し側が決める型、今回はstring型
// key: U    => Uもジェネリクスで、キーとして使われる型
// :T [key]  => T[key]はTの中の、指定されたキーの型を表す、今回はstring型
// value[key]; => ジェネリクスと keyof によって、型安全にプロパティへアクセスできる
// return value; => ジェネリクス使用で戻り値の型がanyにならず、元の型Tのまま保たれる
// Q. UはTをextendsで拡張してるけどageはどれで許可されてるのか => A. 引数にageがあるとvalue内で型推論されてUでも自動的に許可されてる
function copy<T extends { name: string }, U extends keyof T>(value: T, key: U): T {
  value[key];
  return value;
}

console.log(copy({ name: 'Jack', age: 30 }, 'name'));

// １０１- Classに対してジェネリクスを使用する方法
class LightDB<T extends string | number | boolean> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }

  remove(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  get() {
    return this.data;
  }
}

const stringLightDB = new LightDB<string>();
stringLightDB.add('Jack');
stringLightDB.add('Jill');
stringLightDB.remove('Jack');
console.log(stringLightDB.get());

// １０２- InterfaceやTypeエイリアスに対してジェネリクスを使用する方法
type TmpDB<T> = {
  id: number;
  data: T[];
};

const tmpDB: TmpDB<number> = {
  id: 3,
  data: [33],
};

// １０３- 内蔵されているジェネリック型であるUtility型(TSが用意してあるジェネリクスを使った汎用的な型をまとめて内蔵されてる)
interface Todo{
  title: string;
  text: string;
}

// Partial, Readonly はUtility型
type Todoable = Partial<Todo>; 
type ReadTodo = Readonly<Todo>;

const fetchD = new Promise<string>(resolve => {
  setTimeout(() => {
    resolve("hello");}, 3000);
})

fetchD.then(data => {
  data.toUpperCase();
})

const vegetables: Array<string> =["tomato", "broccoli", "asparagus"]