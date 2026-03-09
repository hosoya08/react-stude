import Profile from "./components/Profile";
import Container from "./components/Container";

const profile = [
  { name: "Takashi", age: 19, country: "Japan", color: "green" },
  { name: "Jane", age: 28, country: "UK", color: "blue" },
  { name: "Gabriel", age: 28, country: "Paraguay", color: "red" },
];

const Example = () => {
  return (
    <div>
      {/* 以下ではchildrenとしているが別に他の名目でも問題ない */}
      <Container title="Childrenとは？"  children={
        [
          <Profile {...profile[0]}/> // コンポーネントの中に別のコンポーネントを渡すことができる
        ]
        }/>

        {/*
        Containerタグに終了タグを付けてその中に別のコンポーネントを入れることも可能。
        でも、上記のchildrenをtestとして受け取るプロップスをchildrenからtestにすると以下のは表示されなくなる。
        以下の値はchildrenでしか受け取ることが出来ないためである。
        */}
        <Container title="別の記述の方法（タグで囲う方法）">
          <Profile {...profile[0]} />
          <Profile {...profile[1]} />
          <Profile {...profile[2]} />
        </Container>
    </div>
  );
};

export default Example;
