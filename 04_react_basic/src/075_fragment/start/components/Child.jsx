import React from "react"
import "./Child.css"

const Child = () => {
  return (
    // React Fragmentはreactを読み込むことで余計なhtmlタグで囲わないようにすることができる。
    // React.FragmentはHTMLとしてはなかったことになる
    // <React.Fragment>の代わりに<></>で全体を囲っても同じ効果がある（<>）ではReactをimportする必要はない
    <React.Fragment>
      <div className='component'>
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repellendus. Repellat quod commodi qui quia fugit, accusamus id molestiae dolorum quos molestias praesentium rem alias laboriosam
        tenetur sed beatae perspiciatis!
      </p>
    </React.Fragment>
  )
}

export default Child
