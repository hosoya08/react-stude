const Example = () => {

  const clickHandler = () => {
    alert('click on');
  }

  return (
    <>
      <button onClick={clickHandler}>クリックしてください</button>
      <button>クリックしてください</button>
    </>
  );
};

export default Example;
