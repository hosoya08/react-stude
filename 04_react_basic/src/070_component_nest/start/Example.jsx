import Child from './components/Child'

// 読み込みが１つしかない場合、returnを省略できる
const Example = () => <Child />


```
export名前付きとデフォルトの2種類あるが
1ファイルに１つのコンポーネントを書くのが
一般的なのでdefaultを使用すれば良い
```
export default Example;
