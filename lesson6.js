"use strict";
const bob76 = {
    name: 'Ellie',
    role: 'server-side',
    follower: 100,
};
// ７７- ３つのtype guardで型を絞り込む方法(Narrowing：ナローウィング)
// 各３つ演算子はJSに備わってる
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
// 3⃣instanceof演算子で特定クラスのインスタンスかどうかを判定して型ガードとして利用できる
class cat77 {
    constructor() {
        // ７８-タグ付きUnionで型を限定化
        this.kind = 'cat';
    }
    speak() {
        console.log('3⃣ meow');
    }
}
class bird77 {
    constructor() {
        // ７８-タグ付きUnionで型を限定化
        this.kind = 'bird';
    }
    speak() {
        console.log('3⃣ tweet');
    }
    fly() {
        console.log('3⃣ flutter');
    }
}
function havePet(pet) {
    // speakメソッドは共通
    pet.speak();
    // ７８-タグをつけるとswitch文で限定も可能
    switch (pet.kind) {
        case 'bird':
            pet.fly();
    }
    if (pet instanceof bird77) {
        // flyメソッドはbird77だけなのでinstanceof使用でチェック
        pet.fly();
    }
}
// new cat77(),new bird77() 的なクラスから生成されたinstanceである必要がある
// でないと反映されない
havePet(new cat77());
havePet(new bird77());
// ７９- 型アサーション(as)を使って、手動で型を上書き
const input = document.getElementById('input');
input.value = 'initial input value';
// ７９- jsxファイルで推奨
const inputAS = document.getElementById('input');
// ８０- !(Non-null assertion operator)を式文末に書くと、式がnullまたはundefinedではないと断言可能
// ８０- const inputAS = document.getElementById('input')!;
inputAS.value = 'initial input value';
// ７９- jsxファイル推奨と一緒（括弧を忘れないように）
document.getElementById('input').value = 'initial input value';
const designer = {
    name: 'Catherine',
    role: 'backend',
};
const downloadFile = {
    id: 1,
    user: {
        name: {
            first: 'John',
            last: 'Doe',
        },
    },
};
// ８３- ?を書くと use,nameがないときはエラーにならず途中で undefined を返して安全にアクセスできる
console.log(downloadFile.user?.name?.first);
const userName = downloadFile.user ?? 'no-user';
// ８４- Nullish Coalescing<ナリッシュ・コアレッシング>使い方
// downloadFile.user が undefined か null であれば右辺を返す
// || と違いは undefined か null で限定されてる点
const userFile = downloadFile.user ?? 'no-name';
let test = 'name';
// designer[test]に入る値が undefined の可能性があるため安全策として ? を書く
designer[test]?.toUpperCase();
// 上記がなくてもエラーにはならないが正確な string型ではなくstring | numberでUnion型で返る → 正確な型推論が欲しい場合はオーバーロードを使う
function toUpperCase83(x) {
    if (typeof x === 'string') {
        return x.toUpperCase();
    }
    return x;
}
const upperHello = toUpperCase('hello');
// string と number へ対応できる toUpperCase83 を upperHello88定数 へ代入
const upperHello88 = function (x) {
    return 0;
};
let unionFunc;
unionFunc = function (a) {
    return 0;
};
// ８６- 型の互換===============================================
// 1⃣文字列リテラル
// 型構造が一致していれば互換性がある
let targetHello = 'hello';
let sourceHello = 'hello';
targetHello = sourceHello;
// ───────────────────────────────
// 2⃣Enum型
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (Color = {}));
let targetColor = Color.RED;
let sourceColor = 100;
// 互換性があるためエラーにならない
// enumは違う名前で型が作られていれば別型として扱われる => 名前的型付け
targetColor = sourceColor;
targetColor = Color.BLUE;
// ───────────────────────────────
// 3⃣関数
let targetFunction = function (a, b) { };
let sourceFunction = function (a) { };
// TSは型構造が一致していればエラーにならない
// 必要な分が渡ればよいって考え => 上記例では a: string が渡ればよいためエラーにならない、b: string は sourceFunction側 で最初から存在しないだけ
// 引数が少ない（制限が弱い）関数を、引数が多い（制限が強い）関数の型に代入可
targetFunction = sourceFunction;
targetFunction('hi', 'hello');
// privateなど制限をつけると代入不可になる
class AdvancedPerson {
    constructor() {
        this.name = 'Catherine';
        this.age = 27;
    }
}
class AdvancedCity {
    constructor() {
        this.name = 'NewYork';
        this.age = 100;
    }
}
let targetPerson = new AdvancedPerson();
let sourceCity = new AdvancedCity();
targetPerson = sourceCity;
// ============================================================
// ８７- TypeScriptの型安全性、JavaScriptの柔軟性
// string × string => string
// string × number => number
// などに型推論される
// ９１- レストパラメーターに配列やタプルを指定する方法 - labeled tuple
// タプル（配列に並び順まで型で決める）で[number, string, boolean]を指定すると引数が(0, "hello", true)にならないとエラー
function advancedFnA(...args) { }
advancedFnA(0, 1, 2, 3);
// オプショナルパラメータも使用可（配列の最後に書く必要）
// 配列にレストパラメーターを最後に入れる際は
function advancedFnB(...args) { }
advancedFnB(0, 'hello', true, 1, 2, 3, 4, 5, 6);
// ９２- 配列とタプルにreadonly修飾子をつける
// args は 読み取り専用タプル になるため args を変更できなくなる
function advancedFnC(...args) { }
advancedFnC(0, 'hello', true, 1, 2, 3, 4, 5, 6);
// args[0] = 1; はエラー
// args.push(10); はエラー
// push, pop, splice などの破壊的操作がすべて禁止される
// ９３- constアサーション
// オブジェクトに直接続けて書く
// as const をつけると readonly になる
let hi = 'hi';
// hi = 'hello'; はエラー
const milk = 'milk';
let drink = milk;
const array = [10, 20];
const peter = {
    name: 'Peter',
    age: 38,
};
// ９５- シンボル型使い方
// シンボル型は他値と被らないのが保証されてる
// 文字列、数字など分かりやく表現されない
// 特定シンボルを示す型（string,number型ではリテラル型に相当） => ユニークシンボル型 => typeof使用
const symbol1 = Symbol();
const symbol2 = Symbol();
// キーでも使える
const object = {
    [symbol1]: 'hello',
};
function myFunction(mySymbol) { }
// function myFunction(mySymbol: typeof symbol1) {} => typeof 使用で symbol1 だけに限定できる
myFunction(symbol1);
myFunction(symbol2);
