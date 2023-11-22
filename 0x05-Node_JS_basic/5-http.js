const http = require('http');
const countStudents = require('./3-read_file_async');

const requestHandler = async (req, res) => {
  const DATABASE = process.argv[2] || null;
  let students;
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    try {
      students = await countStudents(DATABASE);
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${students.pop()}\n`);
      students.forEach((s) => {
        res.write(`Number of students in ${s.course}: ${s.studentsFirstNames.length}. List: ${s.studentsFirstNames.join(', ')}${s === students[students.length - 1] ? '' : '\n'}`);
      });
      res.end('');
    } catch (error) {
      res.end(error.message);
    }
  }
};

const app = http.createServer();
app.addListener('request', (req, res) => requestHandler(req, res));
app.listen(1245);

module.exports = app;
