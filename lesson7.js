"use strict";
// ９８- ジェネリクスを使って、型を引数として受け取る
// valueは変数名
// 例では<T>で型推論される
function copy(value) {
    return value;
}
console.log(copy("hello"));
