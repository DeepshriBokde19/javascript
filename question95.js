class Student {
    constructor(name, id, courses) {
        this.name = name;
        this.id = id;
        this.courses = courses;
    }
}

class StudentManagement {
    constructor() {
        this.students = [];
    }

    addStudent(student) {
        this.students.push(student);
    }

    listStudents() {
        this.students.forEach(student => {
            console.log(`Student: ${student.name}, ID: ${student.id}, Courses: ${student.courses.join(', ')}`);
        });
    }
}


const management = new StudentManagement();
management.addStudent(new Student("Alice", "S001", ["Math", "Science"]));
management.addStudent(new Student("Bob", "S002", ["History"]));
management.listStudents();
