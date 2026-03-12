import { useState } from "react";

const Example = () => {

  //　■★　以下は中を理解するように記載した。実務などでは以下のコメントの下に記載したようにして記述する　★■
  // let arrayValue = useState(); //useStateの戻り値：[参照値, f]　→ fは参照地を更新用の関数が入る
  let [val, setVal] = useState();
  const changeContentText = (e) => {
    setVal(e.target.value);
  }
  return (
    <>
    {/* 以下は長い書き方。理解を深めるために記載した、 */}
    {/* <input
    type="text"
    onChange={(e) => {
      const setFn = arrayValue[1];
      setFn(e.target.value); //更新関数を使って参照値を変更
    }}
    /> = {arrayValue[0]} 更新関数で更新した参照値をここで表示 */}


    {/* 実際は以下のように使う */}
    <input
    type="text"
    onChange={changeContentText}
    /> = {val}
    </>
  );
};

export default Example;
