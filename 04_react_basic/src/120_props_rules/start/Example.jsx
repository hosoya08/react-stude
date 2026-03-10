// 対象動画：https://www.udemy.com/course/react-complete-guide/learn/lecture/33042084#questions
import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
  // それぞれのコンポーネントに渡したい値がある場合親コンポーネントから渡すことしか出来ない
  // Helloの中にname="taro"としてもそれはHelloの中でしか使えずByeにわたすことはできない

  // POINT propsの流れは一方通行
  const name = "Tom";


  return (
    <>
      <Hello name={name}/>
      <Bye name={name}/>
    </>
  );
};

export default Example;
