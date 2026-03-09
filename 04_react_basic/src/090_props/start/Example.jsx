import Child from "./components/Child"

const Example = () => {
    const hello = (arg) => `Hello ${arg}`
    // 引数の値を格納したオブジェクトを用意
    const o = {
        color: "red",
        bool: true,
        num: 123,
        fn: hello,
        obj: {
            name: 'Gabriel',
            age: 29
        }
    }
    return (
        <>
            {/* <Child
                num={123}
                fn={hello}
                bool
                obj={{ name: 'Tom', age: '18' }}
            /> */}

            {/* 上記とおなじ意味を持つ引数をオブジェクトにした場合の書き方 */}
            <Child
                // num={o.num} ←この書き方でもいいが面倒
                {...o} //この書き方で中の値が引数として呼び出される
            />
        </>
    )
}

export default Example
