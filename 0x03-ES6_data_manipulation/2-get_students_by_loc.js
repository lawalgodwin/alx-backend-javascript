export default function getStudentsByLocation(students, city) {
  if (!Array.isArray(students)) return [];

  const studentsInCity = students.filter(((student) => student.location === city));

  return studentsInCity;
}
