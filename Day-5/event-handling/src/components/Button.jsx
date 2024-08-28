// React event --> event as an attr, --> camelCase --> onClick, onChange

const Button = () => {
  const handleClick = () => {
    alert(`button click`);
  };

  const handleClickWithArg = (id) => {
    alert(`This is the button ${id}`);
  };

  return (
    <>
      <button className="" onClick={() => handleClickWithArg(1)}>
        Button With Arg
      </button>

      <button onClick={handleClick}>Button</button>
    </>
  );
};

export default Button;
