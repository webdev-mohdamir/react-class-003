const Form1 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.input); // undefiend
    console.log(e.target[0].value); // input
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form1;
