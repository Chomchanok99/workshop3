const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 40 },
  { name: "Charlie", score: 55 },
  { name: "Diana", score: 90 },
  { name: "Eve", score: 30 },
  { name: "Frank", score: 60 }
];
function filterPassedStudents() {
  students.forEach(student => {
    if (student.score >= 50) {
      console.log(`Student ${student.name} passed with score ${student.score}`);
    }
  });
}
filterPassedStudents();
