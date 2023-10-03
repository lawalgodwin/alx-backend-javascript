export default function updateStudentGradeByCity(students, city, newGrades) {
  const cityStudent = students.filter((student) => student.location === city);
  const updatedStudentInfo = cityStudent.map((student) => {
    const [filteredNewGrade] = newGrades.filter(((newGrade) => newGrade.studentId === student.id));
    return {
      ...student,
      grade: filteredNewGrade ? filteredNewGrade.grade : 'N/A',
    };
  });
  return updatedStudentInfo;
}
