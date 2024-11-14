class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }

    toString() {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

const students = [
    new Student("Alice", 20, "A"),
    new Student("Bob", 21, "B"),
    new Student("Charlie", 19, "A"),
    new Student("Daisy", 22, "C"),
    new Student("Edward", 20, "B")
];

students.forEach(student => console.log(student.toString()));
