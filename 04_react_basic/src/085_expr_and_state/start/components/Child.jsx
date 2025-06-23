/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。
*/

import "./Child.css";

const a = 'hello'; //　'hello'は式　「const a =」 はconst b = const aはできないから文
const b = true; // trueは式
const fn = () => 'Hello function'; //関数は文
const c = fn(); // 関数の実行自体は変数に代入できるので式
const d = true ? 'yes' : 'no'; //　三項演算子これは代入できるので式

if(false){ // これは代入ができないので全体が文
  console.log('これは変数に代入できないので文');
}

/*
===============================================
===============================================
式は以下のreturnに記載ができるが文は記載はできない
文はreturnの外で記載する必要がある
===============================================
===============================================
*/

const Child = () => {
  return (
    <div className="component">
      <h3>式と文</h3>
      <h3>{c}</h3>
      <h3>{true? 'hello true' : 'bey'}</h3>
    </div>
  );
};

export default Child;
