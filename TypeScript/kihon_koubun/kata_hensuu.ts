//変数提言

// letは再代入が可能な変数提言
let a = 1;
a = 2;

//constは再代入が不可能な変数提言
const b = "Hello World";
b = "Hello TypeScript";  //←これは無理

//しかし、オブジェクトの変更は可能
const obj = {a: 1};
obj = {a: 2};   //再代入は無理、
obj.a = 2;      //これはOK（プロパティの変更）

const list = [1, 2, 3];
list = [2, 3, 4]; //再代入は無理、
list[0] = 1;   //要素の変更はOK
list.push(3); //これも要素の変更だからOK

//変数にどんな値を入れるか指定できる。事故防止
const num: number = 123;
const str: string = "hello";

//verは使わない！

