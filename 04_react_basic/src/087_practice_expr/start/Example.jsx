const title = 'Expression';
const array = ['item1', 'item2', 'item3'];
const fn = (arg) => {
  return `${arg} Function`;
};
const upperCaseText = 'UpperCaseText';
const text = upperCaseText.toUpperCase();

const hello = 'Hello JSX';

const Example = () => {
  return (
    <div className="fragment">
      <h3>練習問題</h3>

      <h3>{hello}</h3>
      <h3>{text}</h3>
      <h3>{'Hello ' + title}</h3>
      <h3>{array}</h3>
      <h3>{fn('Hello')}</h3>
    </div>
  );
};

export default Example;
