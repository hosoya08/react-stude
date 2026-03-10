// https://www.udemy.com/course/react-complete-guide/learn/lecture/33042090#questions
import React from "react";
import Hello from "./components/Child";

const Bye = () => {
      return <h2>GoodBye!</h2>;
}

const style = {
  color: "tomato",
  fontSize: 20,
  fontWeight: "normal"
}

const Example = () => {
  return (
    <div>
      <Bye/>
      <Hello {...style}/>
      <Hello/>
    </div>
  );
};

// Exampleコンポーネントの中に子コンポーネントのByeを置くとそれがtypeに設定される
// childrenはGoodBye!になる

console.log(Example());

export default Example;

