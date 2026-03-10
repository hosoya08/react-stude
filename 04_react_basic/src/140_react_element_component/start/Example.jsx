// https://www.udemy.com/course/react-complete-guide/learn/lecture/33042090#questions
import React from "react";

const Bye = () => {
      return <h2>GoodBye!</h2>;
}

const Example = () => {
  return (
    <div>
      <Bye/>
    </div>
  );
};

// Exampleコンポーネントの中に子コンポーネントのByeを置くとそれがtypeに設定される
// childrenはGoodBye!になる

console.log(Example());

export default Example;

