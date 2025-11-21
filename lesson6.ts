// ７６- AかつBのように、&を用いてインターセクション型を定義(ユニオン型(記号：|)=> または)
type Engineer76 = {
  name: string;
  role: string;
};

type Blogger76 = {
  name: string;
  follower: number;
};

// name,role,follower全部揃ってないとエラー
type EngineerBlogger76 = Engineer76 & Blogger76;
const bob76: EngineerBlogger76 = {
  name: 'Ellie',
  role: 'server-side',
  follower: 100,
};

type NumberBoolean76 = number | boolean;
type StringNumber76 = string | number;
// 共通してるnumberがgeneralにはいる
type general76 = NumberBoolean76 & StringNumber76;

// ７７- ３つのtype guardで型を絞り込む方法(Narrowing：ナローウィング)
// 各３つ演算子はJSに備わってる

let foo: string | number;
foo = 'hello';

// type guardは実行中の値の型までは分からないので、安全にコードを書くためのヒント（ガード）を作るイメージ
function myFunc(x: string | null) {
  if (x === null) {
    return x;
  }
  return x;
}

type Engineer77 = {
  name: string;
  role: string;
};

type Blogger77 = {
  name: string;
  follower: number;
};

// name,role,follower全部揃ってないとエラー
type EngineerBlogger77 = Engineer77 & Blogger77;
const Ellie77: EngineerBlogger77 = {
  name: '1⃣ Ellie',
  role: '1⃣ server-side',
  follower: 100,
};

type NumberBoolean77 = number | boolean;
type StringNumber77 = string | number;
// 共通してるnumberがgeneralにはいる
type general77 = NumberBoolean77 & StringNumber77;

// 1⃣ typeof演算子で具体的な型に絞れる
function toUpperCase(x: string | null) {
  if (typeof x === 'string') {
    return x.toUpperCase();
  }
  return '';
}

// 2⃣ in演算子でオブジェクトが特定のプロパティを持つかどうかで型を絞れる
// (nomadWorker.と入力で候補に出てくる)
type NomadWorker77 = Engineer77 | Blogger77;

function describeProfile(nomadWorker: NomadWorker77) {
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

type Pet77 = cat77 | bird77;

function havePet(pet: Pet77) {
  // speakメソッドは共通
  pet.speak();
  if (pet instanceof bird77) {
    // flyメソッドはbird77だけなのでinstanceof使用でチェック
    pet.fly();
  }
}

// new cat77(),new bird77() 的なクラスから生成されたinstanceである必要がある
// でないと反映されない
havePet(new cat77());
havePet(new bird77());
