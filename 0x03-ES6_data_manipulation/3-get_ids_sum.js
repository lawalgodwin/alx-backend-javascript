export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) return 0;

  const sumOfIds = students.reduce((acc, currentStudent) => (acc + currentStudent.id), 0);
  return sumOfIds;
}
