const fs = require('fs');
const { promisify } = require('util');

const countStudents = async (fileName) => {
  try {
    fs.readFile = promisify(fs.readFile);
    const data = await fs.readFile(fileName, 'utf8');
    const lines = data.split('\r\n');
    while (lines[lines.length - 1] === '') lines.pop();
    const students = lines.slice(1);
    const NUMBER_OF_STUDENTS = students.length;
    const courses = new Set(students.map((student) => student.split(',')[3]));
    console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);
    const response = [];
    courses.forEach((course) => {
      let studentsFirstNames = [];
      students.map((student) => {
        if (student.split(',')[3] === course) {
          studentsFirstNames = [...studentsFirstNames, student.split(',')[0]];
        }
        return student;
      });
      response.push({ course, studentsFirstNames });
      console.log(`Number of students in ${course}: ${studentsFirstNames.length}. List: ${studentsFirstNames.join(', ')}`);
    });
    response.push(NUMBER_OF_STUDENTS)
    return Promise.resolve(response);
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
