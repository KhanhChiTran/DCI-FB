// Given a list of students and their grades, find the one with the highest grade and the one with the lowest grade.​
// The maximum points a student can get is 1000. The minimum passing grade is 200. How many students are failing?
function getResult() {
  const students = [
    {
      id: 15,
      firstName: "Liana",
      lastName: "Gleason",
      grade: 253,
    },
    {
      id: 6,
      firstName: "Olen",
      lastName: "Schmitt",
      grade: 831,
    },
    {
      id: 41,
      firstName: "Darryl",
      lastName: "Nicolas",
      grade: 247,
    },
    {
      id: 64,
      firstName: "Eladio",
      lastName: "Davis",
      grade: 967,
    },
    {
      id: 74,
      firstName: "Veda",
      lastName: "Kling",
      grade: 313,
    },
    {
      id: 2,
      firstName: "Vern",
      lastName: "Rippin",
      grade: 201,
    },
    {
      id: 21,
      firstName: "Antonio",
      lastName: "Huel",
      grade: 753,
    },
    {
      id: 58,
      firstName: "Jacky",
      lastName: "Reynolds",
      grade: 620,
    },
    {
      id: 26,
      firstName: "Kamryn",
      lastName: "Windler",
      grade: 605,
    },
    {
      id: 91,
      firstName: "Jerrold",
      lastName: "Stark",
      grade: 465,
    },
    {
      id: 5,
      firstName: "Macy",
      lastName: "Cole",
      grade: 984,
    },
    {
      id: 49,
      firstName: "Carole",
      lastName: "Kuhn",
      grade: 645,
    },
    {
      id: 147,
      firstName: "Carley",
      lastName: "Moen",
      grade: 791,
    },
    {
      id: 4,
      firstName: "Nicklaus",
      lastName: "Goldner",
      grade: 923,
    },
    {
      id: 876,
      firstName: "Avis",
      lastName: "Dickens",
      grade: 569,
    },
    {
      id: 92,
      firstName: "Hannah",
      lastName: "Stokes",
      grade: 419,
    },
    {
      id: 12,
      firstName: "Angus",
      lastName: "Jacobson",
      grade: 323,
    },
    {
      id: 29,
      firstName: "Adrienne",
      lastName: "Vidal",
      grade: 226,
    },
  ];
  return getGrades(students);
}
function getGrades(arr) {
  let failingStudents = [];
  let higestGradeStudent = {
    grade: 0,
  };
  let lowestGradeStudent = {
    grade: 1000,
  };

  for (let student of arr) {
    if (student.grade > higestGradeStudent.grade) {
      higestGradeStudent = student;
    }
    if (student.grade < lowestGradeStudent.grade) {
      lowestGradeStudent = student;
    }
    if (student.grade < 200) {
      failingStudents = [...failingStudents, student];
    }
  }
  let result = [
    higestGradeStudent,
    lowestGradeStudent,
    failingStudents,
    `${failingStudents.length} failed `,
  ];
  return result;
}

console.log(getResult());
