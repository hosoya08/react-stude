const Hello = (props) => {

  // POINT propsは読み取り専用
  // props.name = "Bob";
  // このようにprops内容を変更しようとするとエラーになる

  // propsの設定内容を確認する方法（変更可能かどうかなど）
  const desc = Reflect.getOwnPropertyDescriptor(props, "name");// みたいオブジェクト、設定状態をみたいプロパティ
  console.log(desc);

  /*　出力結果
  configurable : false 隠し設定の変更ができるかどうか　
  enumerable : true forループで列挙になるかどうか
  value : "Tom"
  writable : false 対象のプロパティの値が変更できるかどうか
  */

  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
