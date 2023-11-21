const fs = require('fs');
const path = require('path');

const countStudents = (fileName) => {
  try {
    const fileContent = fs.readFileSync(path.join(__dirname, fileName), { encoding: 'utf-8' });
    let lines = [];
    for (const line of fileContent.split('\r\n')) lines = [...lines, line];
    while (lines[lines.length - 1] === '') lines.pop();
    lines = lines.slice(1);
    const allFields = new Set(lines.map((line) => line.split(',')[3]));

    console.log(`Number of students: ${lines.length}`);

    for (const field of allFields) {
      let students = [];
      lines.map((line) => {
        if (line.split(',')[3] === field) {
          students = [...students, line.split(',')[0]];
        }
        return line;
      });
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
