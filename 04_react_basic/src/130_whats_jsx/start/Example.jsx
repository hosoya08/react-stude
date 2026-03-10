// https://www.udemy.com/course/react-complete-guide/learn/lecture/33042088#questions
import React from "react";

const Example = () => {
    // 以下のサンプル1の中にあるhtmlはバベルというもので以下のコメントアウトしているモノに置き換えて出力している
  const sample1 = <h1 className="greeting">Hello World</h1>;
  // React.createElement("h1", {
  //   className: "greeting"
  // }, "Hello World");


  const sample2 = (
    <div>
      <h1>Hello!</h1>
      <h2>Good to see you.</h2>
    </div>
  );



  // 以下はオブジェクトのpropsを出力している
  console.log(
    (
      <div>
        <h1>Hello!</h1>
        <h2>Good to see you.</h2>
      </div>
    ).props
  );
    // 上記の内容がバベルと同じ内容の処理が変更されて出力されている
    // 以下は仮装ドムと言われる
  return React.createElement("div",null,
    React.createElement("h1", null, "Hello!"),
    React.createElement("h2", null, "Good to see you.")
  );
};

export default Example;

// jsxのながれPoint!!
// jsxオブジェクト　→　バベルで関数変換　→　react要素
