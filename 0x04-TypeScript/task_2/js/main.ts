// Task 5

interface DirectorInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workDirectorTasks(): string
}

interface TeacherInterface {
    workFromHome(): string
    getCoffeeBreak(): string
    workTeacherTasks(): string
}

// create a class Director that implements DirectorInterface

class Director implements DirectorInterface {
    workFromHome(): string {
        return "Working from home"
    }

    getCoffeeBreak(): string {
        return "Getting a coffee break"
    }

    workDirectorTasks(): string {
        return "Getting to director tasks"
    }
}

    // create a class Teacher that implements TeacherInterface

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return "Cannot work from home"
    }

    getCoffeeBreak(): string {
        return "Cannot have a break"
    }

    workTeacherTasks(): string {
        return "Getting to work"
    }
}

const createEmployee = (salary: number | string): Teacher | Director => {
    let obj = null
    if((typeof salary === "number") && (salary < 500)){
        obj = new Teacher()
    }

    else {
        obj = new Director()
    }

    return obj
}

console.log(createEmployee(200));

console.log(createEmployee(1000));

console.log(createEmployee('$500'));


// Task 6

const isDirector = (employee: any) => employee instanceof Director

const executeWork = (employee: any) => {
    if (isDirector(employee))
      return (employee as Director).workDirectorTasks()
    return (employee as Teacher).workTeacherTasks()
} 

console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));
