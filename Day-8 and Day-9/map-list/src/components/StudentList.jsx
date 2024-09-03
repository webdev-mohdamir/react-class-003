const StudentList = () => {
  const studentDetails = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" },
    { name: "Diana", grade: "C" },
    { name: "Ethan", grade: "B" },
  ];

  return (
    <>
      <h1>Student List</h1>

      {/* {_id, id} */}
      {/* UUID */}
      <ul>
        {studentDetails.map((student, i) => {
          return (
            <li key={`${student.name}-${student.grade}-${i}`}>
              <h2>Name: {student.name}</h2>
              <span>Grade: {student.grade}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default StudentList;
