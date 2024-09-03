const NameList = () => {
  // Map --> array elements itrate --> return element, ture, number, string --> if else
  // Map --> array elements itrate --> return tag(element), component

  // return (
  //   <>
  //     <h1>Name List Component</h1>
  //     <ul>
  //       <li>Arun</li>
  //       <li>Prince</li>
  //       <li>Jatin</li>
  //       <li>Komal</li>
  //     </ul>
  //   </>
  // );

  const names = ["Arun", "Prince", "Komal", "Jatin", "New Student", "Komal"];

  return (
    <>
      <h1>Name List Component</h1>
      <ul>
        {/* {names.map(() => {
          return <li>Hello i am an item</li>;
        })} */}

        {names.map((name, i) => {
          return <li key={`${name}-${i}`}>{name}</li>;
        })}
      </ul>
    </>
  );
};

export default NameList;
