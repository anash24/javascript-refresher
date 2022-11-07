

let student1 = { firstName: 'Sue', lastName: 'Smith', gpa: 3.6, playsVolleyball: true }
let student2 = { firstName: 'Bob', lastName: 'Loblaw', gpa: 1.3, playsVolleyball: false }

let allStudents = [student1, student2]

let student3 = { firstName: 'Erin', lastName: 'Wood', gpa: 4.0, playsVolleyball: false }

allStudents.push(student3)
console.log(allStudents)


for(let i = 0; i < allStudents.length; i++){
    aboutStudent(allStudents[i])
}


// console.log(student1.firstName + ' ' + student1.lastName + ' has a GPA of ' + student1.gpa)
// console.log(student2.firstName + ' ' + student2.lastName + ' has a GPA of ' + student2.gpa)

function aboutStudent(student) {
    if (student.playsVolleyball) {
        console.log(student.firstName + ' ' + student.lastName + ' has a GPA of ' + student.gpa + ' and plays volleyball')
    } else {
        console.log(student.firstName + ' ' + student.lastName + ' has a GPA of ' + student.gpa + ' and does not play volleyball')
    }
}

// aboutStudent(student1)
// aboutStudent(student2)



