// base class
class Student {
    constructor(name, grade){
        this.name = name
        this.grade = grade
    }   
}
let basicStudent = new Student("adam",10)

// college student 
// roomNumber : 155
class CollegeStudent extends Student {
constructor(name, grade, roomNumber){
    super(name, grade)
    this.roomNumber = roomNumber
    }
}

let collegeStudent = new CollegeStudent("ryan", 14, 123)
console.log(collegeStudent)
