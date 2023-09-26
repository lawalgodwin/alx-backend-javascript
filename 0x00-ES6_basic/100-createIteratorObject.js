export default function createIteratorObject(report) {
  const newArray = [];
  const departmentEmployees = Object.values(report.allEmployees);
  for (const employees of departmentEmployees) {
    newArray.push(...employees);
  }
  return newArray;
}
