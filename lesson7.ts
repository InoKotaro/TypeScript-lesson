// ９８- ジェネリクスを使って、型を引数として受け取る
// valueは変数名
// 例では<T>で型推論される
// ９９- extendsを使って型パラメータに制約可能
function copy<T extends { name: string }>(value: T): T {
  return value;
}

console.log(copy({ name: 'Jack' }));