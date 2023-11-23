const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const studentsData = await readDatabase(process.argv[2]);
      const csData = studentsData[0];
      const sweData = studentsData[1];
      res.statusCode = 200;
      // res.setHeader("Content-Type", "text/plain");
      res.write('This is the list of our students\n');
      res.write(`Number of students in ${csData.course}: ${csData.studentsFirstNames.length}. List: ${csData.studentsFirstNames.join(', ')}\n`);
      res.end(`Number of students in ${sweData.course}: ${sweData.studentsFirstNames.length}. List: ${sweData.studentsFirstNames.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    if (!['CS', 'SWE'].includes(req.params.major)) {
      res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const studentsData = await readDatabase(process.argv[2]);
      studentsData.pop();
      const { major } = req.params;
      const [majorData] = studentsData.filter((d) => (d.course === `${major}`));
      res.status(200).send(`List: ${majorData.studentsFirstNames.join(', ')}`);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
