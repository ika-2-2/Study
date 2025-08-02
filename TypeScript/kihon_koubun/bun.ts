//スコープ
//関数スコープ
function func() {
    const variable: number = 123;
    return variable; //参照できる
};
console.log(variable); //参照できない

//レキシカルスコープ
const m:number = 120;
function a() {
    console.log(m);
};
a();
//=> 120

