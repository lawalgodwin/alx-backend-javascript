// Let's build a Teacher interface
// NB: you can run the script with `npx ts-node NAME_OF_THE_TS_FILE`
interface Teacher {
    firstName: string,
    lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [propName: string]: any
}

const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
}

console.log(teacher3)

// Task 2: Extending the Teacher class
interface Directors extends Teacher{
    numberOfReports: number
}

const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: false,
    numberOfReports: 17
}

console.log(director1)
