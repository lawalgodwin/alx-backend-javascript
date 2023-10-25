interface Student {
  firstname: string,
  lastname: string,
  age: number,
  location: string
}

const Student1: Student = {
  firstname: "Godwin",
  lastname: "Lawal",
  age: 5,
  location: "Lagos"
}

const Student2: Student = {
    firstname: "Abiodun",
    lastname: "Lawal",
    age: 5,
    location: "Benue"
  }

const studentsList: Array<Student> = [Student1, Student2];

const studentsTable = document.getElementById('studentstable') as HTMLTableElement | null;

studentsList.forEach((student) => {
  const row = studentsTable.insertRow()
  const firstnameCell = row.insertCell(0)
  const locationCell = row.insertCell(1);

  firstnameCell.innerText = student.firstname;
  locationCell.innerText = student.location;
})