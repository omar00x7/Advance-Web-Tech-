const name = "Omar";

const marks = [];
marks.push(80);
marks.push(85);
marks.push(9);
marks.push(70);

let total = 0;
for (let i = 0; i < marks.length; i++) {
  total = total + marks[i];
}

let average = total / marks.length;
console.log("total mark: " + total);
console.log("average mark: " + average);

let result;
if (average >= 40) {
  result = "pass";
} else {
  result = "fail";
}
console.log("result: " + result);

let grade;
if (average >= 80) {
  grade = "A";
} else if (average >= 70) {
  grade = "B";
} else if (average >= 60) {
  grade = "C";
} else if (average >= 50) {
  grade = "D";
} else if (average >= 40) {
  grade = "E";
} else {
  grade = "F";
}
console.log("Grade: " + grade);

function findHighestMarks(marks) {
  let highest = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] > highest) {
      highest = marks[i];
    }
  }
  return highest;
}

function countPassedSubject(marks) {
  let count = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) {
      count = count + 1;
    }
  }
  return count;
}

console.log("Passed Subjects: " + countPassedSubject(marks));
console.log("Highest Mark: " + findHighestMarks(marks));