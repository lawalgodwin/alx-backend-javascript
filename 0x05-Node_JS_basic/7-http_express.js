const app = require('express')();
const countStudents = require('./3-read_file_async');

app.get('/', (req, res) => {
  res.end('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.write('This is the list of our students\n');
  try {
    const data = await countStudents(process.argv[2]);
    const NUMBER_OF_STUDENTS = data.pop();
    res.write(`Number of students: ${NUMBER_OF_STUDENTS}\n`);
    res.write(`Number of students in ${data[0].course}: ${data[0].studentsFirstNames.length}. List: ${data[0].studentsFirstNames.join(', ')}\n`);
    res.end(`Number of students in ${data[1].course}: ${data[1].studentsFirstNames.length}. List: ${data[1].studentsFirstNames.join(', ')}`);
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(1245, () => console.log('app listening for connection'));

module.exports = app;
