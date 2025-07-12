// Array of student objects, each with an ID, name, and an array of grades
let students = [
  { id: 1, name: "Alice Johnson", grades: [85, 92, 88] },
  { id: 2, name: "Bob Smith", grades: [78, 81, 90] },
  { id: 3, name: "Charlie Brown", grades: [95, 90, 93] },
  { id: 4, name: "David Wilson", grades: [70, 80, 65] },
];

function calculateAverageGrades(arr) {
  if (!arr.length) return 0;
  if (!Array.isArray(arr)) return 0;
  return arr.map((student) => {
    // Add up all grades
    const totalGrades = student.grades.reduce((acc, grade) => acc + grade, 0);

    // Calculate average and keep it as a number rounded to 2 decimal places
    const averageGrades = parseFloat(
      (totalGrades / student.grades.length).toFixed(2)
    );

    // Return a new object with the averageGrade included
    return {
      id: student.id,
      name: student.name,
      averageGrade: averageGrades,
    };
  });
}

// Generate new array with average grades calculated
const arrayOfStudentWithAverageGrades = calculateAverageGrades(students);

console.log("Students with average grades:", arrayOfStudentWithAverageGrades);

const findTopStudent = (students) => {
  if (!students.length) return 0;
  if (!Array.isArray(students)) return 0;
  return students.reduce((max, cur) =>
    cur.averageGrade > max.averageGrade ? cur : max
  );
};

console.log("Top student:", findTopStudent(arrayOfStudentWithAverageGrades));

const sortStudentByGrade = (students = "") => {
  if (!students.length) return 0;
  if (!Array.isArray(students)) return 0;
  return students.sort((a, b) => b.averageGrade - a.averageGrade);
};

console.log(
  "Students sorted by grade:",
  sortStudentByGrade(arrayOfStudentWithAverageGrades)
);
