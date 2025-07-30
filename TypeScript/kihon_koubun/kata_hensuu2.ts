// string型

//式の挿入
// `${}`で挿入できる
const count = 10; 
console.log(`僕は${count}回ジャンプした`);
`税込み${Math.floor(100 * 1.1)}円` // 計算式や関数も入る！

//typeof演算子
console.log(typeof count);  //"number"が返ってくる
console.log(typeof null);   //"object"が返ってくる（注意！）

//undefined型
//未定義を表すプリミティブ型の値。
/*変数に値がセットされていないとき、戻り値が無い関数、
オブジェクトに存在しないプロパティにアクセスしたとき、配列に存在しないインデックスでアクセスしたときに返ってくる。
TypeScriptの関数で戻り値なしを型注釈する場合、undefinedではなくvoidを使う。
*/
let namae;
console.log(namae);

function func() {}
console.log(func());

const obj = {};
console.log(obj.name);

const arr = [];
console.log(arr[1]);

//Symbol型
//Symbolは、一つだけの特別なIDのこと
const id1 = Symbol("yeah");
const id2 = Symbol("yeah");
console.log(id1 === id2);  //false
//秘密の鍵や名前のかぶりを防ぐために使う。

//bigint
//numberより大きな整数を扱う型。
const n = 100n;   //bigint型は最後にnをつける

//型強制
//文字列と数値など型が異なる2つの値を演算するとき、暗黙に型変換される「型強制」がJavaScriptにはある。
"1" - 1; // 0
"1" + 1; // "11"