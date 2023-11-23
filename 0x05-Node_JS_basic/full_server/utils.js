const countStudents = require('../3-read_file_async');

const readDatabase = async (filePath) => {
  try {
    const data = await countStudents(filePath);
    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error.message);
  }
};

module.exports = readDatabase;
