namespace Subjects {
    export class Java extends Subject {
        getRequirements () {
            return "Here is the list of requirements for Java"
        }

        getAvailableTeacher () {
            if (this.teacher.experienceTeachingJava)
              return `Available Teacher: ${this.teacher.firstName}`
            return "No available teacher"
        }
    }
    export interface Teacher {
        experienceTeachingJava?: number
    }
}