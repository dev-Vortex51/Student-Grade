# Student Grades Script

This script provides an example of how to process an array of student objects, calculate their average grades, find the top student, and sort students by their average grades using JavaScript.

## Features

- Calculates the average grade for each student.
- Finds the student with the highest average grade.
- Sorts students in descending order of their average grades.
- Outputs results to the console.

## Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine (recommended).
- Alternatively, you can run the code in an online JavaScript playground such as [Replit](https://replit.com/join/sdkfwdgozq-belloqudus).

## How to Run

### Option 1: Using Node.js Locally

1. **Save the Script:**

   - Copy the code from below and paste it into a file named `studentGrades.js`.

2. **Run the Script:**

   - Open your terminal and navigate to the folder containing `studentGrades.js`.
   - Run the script using Node.js:

     ```bash
     node studentGrades.js
     ```

   - You should see the output with average grades, the top student, and students sorted by grade.

### Option 2: Online Playground

1. Visit [this Replit link](https://replit.com/join/sdkfwdgozq-belloqudus).
2. Paste the code into the editor if it's not already there.
3. Press the "Run" button.
4. View the output in the console window.

## The Script

```javascript
// Array of student objects, each with an ID, name, and an array of grades
let students = [
  { id: 1, name: "Alice Johnson", grades: [85, 92, 88] },
  { id: 2, name: "Bob Smith", grades: [78, 81, 90] },
  { id: 3, name: "Charlie Brown", grades: [95, 90, 93] },
  { id: 4, name: "David Wilson", grades: [70, 80, 65] },
];

function calculateAverageGrades(arr) {
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
  return students.reduce((max, cur) =>
    cur.averageGrade > max.averageGrade ? cur : max
  );
};

console.log("Top student:", findTopStudent(arrayOfStudentWithAverageGrades));

const sortStudentByGrade = (students) => {
  return students.sort((a, b) => b.averageGrade - a.averageGrade);
};

console.log(
  "Students sorted by grade:",
  sortStudentByGrade(arrayOfStudentWithAverageGrades)
);
```

## Output Example

```
Students with average grades: [
  { id: 1, name: 'Alice Johnson', averageGrade: 88.33 },
  { id: 2, name: 'Bob Smith', averageGrade: 83 },
  { id: 3, name: 'Charlie Brown', averageGrade: 92.67 },
  { id: 4, name: 'David Wilson', averageGrade: 71.67 }
]
Top student: { id: 3, name: 'Charlie Brown', averageGrade: 92.67 }
Students sorted by grade: [
  { id: 3, name: 'Charlie Brown', averageGrade: 92.67 },
  { id: 1, name: 'Alice Johnson', averageGrade: 88.33 },
  { id: 2, name: 'Bob Smith', averageGrade: 83 },
  { id: 4, name: 'David Wilson', averageGrade: 71.67 }
]
```

## Customization

- Add or remove students by modifying the `students` array.
- Change the grades to test different scenarios.

---

**Author:** Bello Qudus Folohunsho
