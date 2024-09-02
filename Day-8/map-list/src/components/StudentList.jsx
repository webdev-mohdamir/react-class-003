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

      <ul>
        {studentDetails.map((student) => {
          return (
            <li>
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
