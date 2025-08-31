const students = [
  { name: "Somchai", grade: "A" },
  { name: "Suda", grade: "B" },
  { name: "Anan", grade: "C" }
];
students.forEach((student, index) => {
  console.log(`Student [${index}]: ${student.name}, Grade: ${student.grade}`);
});
function showStudentCount() {
  console.log(`Total students: ${students.length}`);
}
showStudentCount();
