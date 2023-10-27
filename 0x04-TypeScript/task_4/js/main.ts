export const cpp = new Subjects.Cpp()
export const jave = new Subjects.Java()
export const react = new Subjects.React()
export const cTeacher: Subjects.Teacher = {
    firstName: "Godwin",
    lastName: "Lawal",
    experienceTeachingC: 2
}

console.log('C++')

cpp.setTeacher(cTeacher)
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

console.log('Java')

jave.setTeacher(cTeacher)
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())

console.log('React')

react.setTeacher(cTeacher)
console.log(cpp.getRequirements())
console.log(cpp.getAvailableTeacher())