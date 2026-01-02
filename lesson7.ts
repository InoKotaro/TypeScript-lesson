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
