const Bubble = () => {
  const handleDiv = () => {
    console.log("div clicked");
  };

  const handleBtn = (e) => {
    e.stopPropagation();
    console.log("btn clicked");
  };

  return (
    <div onClick={handleDiv}>
      {" "}
      {/* Parent */}
      Bubble
      <button onClick={handleBtn}>Wow</button> {/* child */}
    </div>
  );
};

export default Bubble;
