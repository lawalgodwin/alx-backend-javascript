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

// Task 3: writing a fuction interface

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) =>{
    return `${firstName[0]}. ${lastName}`
}

console.log(printTeacher("John", "Doe"))

// Task 4: writing a class and its constructor interface

// Interface describing the constructor signature
interface StudentClassConstructor{
    new(firstName: string, lastName: string): IStudentClass
}

// describing the class using interface
interface IStudentClass {
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName(): string
}

// implementing the class

const Studentclass: StudentClassConstructor = class implements IStudentClass {
    firstName: string
    lastName: string

    constructor(firstName: string, lastName: string){
        this.firstName = firstName
        this.lastName = lastName
    }

    workOnHomework(): string {
        return "Currently working"
    }

    displayName(): string {
        return this.firstName
    }
}

const newClass = new Studentclass("Godwin", "Lawal")

console.log(newClass.workOnHomework())
console.log(newClass.displayName())