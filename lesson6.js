"use strict";
const bob76 = {
    name: 'Ellie',
    role: 'server-side',
    follower: 100,
};
// ７７- ３つのtype guardで型を絞り込む方法(Narrowing：ナローウィング)
let foo;
foo = 'hello';
// type guardは実行中の値の型までは分からないので、安全にコードを書くためのヒント（ガード）を作るイメージ
function myFunc(x) {
    if (x === null) {
        return x;
    }
    return x;
}
const Ellie77 = {
    name: '1⃣ Ellie',
    role: '1⃣ server-side',
    follower: 100,
};
// 1⃣ typeof演算子で具体的な型に絞れる
function toUpperCase(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return '';
}
function describeProfile(nomadWorker) {
    console.log(nomadWorker.name);
    if ('role' in nomadWorker) {
        console.log(nomadWorker.role);
    }
    if ('follower' in nomadWorker) {
        console.log(nomadWorker.follower);
    }
}
describeProfile(Ellie77);
// 3⃣instanceof演算子で
class cat77 {
    speak() {
        console.log('3⃣ meow');
    }
}
class bird77 {
    speak() {
        console.log('3⃣ tweet');
    }
    fly() {
        console.log('3⃣ flutter');
    }
}
function havePet(pet) {
    pet.speak();
    if (pet instanceof bird77) {
        pet.fly();
    }
}
havePet(new cat77());
havePet(new bird77());
