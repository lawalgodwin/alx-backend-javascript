export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('Name must be a string');

    if (!Number.isInteger(length)) throw TypeError('Length must be a number');
    if (!Array.isArray(students)) throw Error('Students must be an array of strings');
    students.forEach((student) => {
      if (typeof student !== 'string') throw TypeError('Students must be an array of strings');
    });
    this._name = name;
    this._length = length;
    this._students = [...students];
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') throw new TypeError('Name must be a string');
    this._name = value;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    if (!Number.isInteger(value)) throw new TypeError('Length must be a number');
    this._length = value;
  }

  get students() {
    return this._students;
  }

  set students(value) {
    if (!Array.isArray(value)) throw new TypeError('Students must be an array of strings');
    this._students = [...this.students];
  }
}