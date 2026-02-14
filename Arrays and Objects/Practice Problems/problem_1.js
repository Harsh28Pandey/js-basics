//? 1 - filter students by grade
const students = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" },
];

const topStudents = students.filter(
    (student) => student.grade === "A"
);

console.log(topStudents);