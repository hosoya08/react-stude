import "./Expression.css"

const Expression = () => {
    const title = "Expression"
    const array = ["item1", "item2", "item3"]
    const hello = (str) => `${str} Function`
    const jsx = <h3>htmlタグはjsのオブジェクトになる</h3>
    return (
        <div className={title.toLowerCase()}>
            <h3>hello {title}</h3>
            <h3>{array}</h3>
            <h3>{hello("Hello")}</h3>
            <h3>{/* コメントアウト（画面には表示されない） */}</h3>
            {<h3>Hello JSX この記載方法は完全にJSXとして扱われる</h3>}
            {jsx}
        </div>
    )
}
export default Expression
