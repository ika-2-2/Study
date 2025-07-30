//ボックス化
const str2: string = "helo";
console.log(str2.length);
// ↑これの事。本来、プリミティブ型はlengthが使えないが、裏で下のようにJavascriptが自動変換している。実行が終わったらプリミティブに戻る
const str3: string = "hii";
const str3Object = new String(str3); // ここが自動で実行される（ラッパーオブジェクト）
str3Object.length; // フィールドの参照
str3Object.toUpperCase(); // メソッド呼び出し

