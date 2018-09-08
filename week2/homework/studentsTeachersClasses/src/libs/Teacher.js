import {Contact} from "./Contact";
import {Courses} from "./Courses";

export class Teacher extends Contact {
    /**
     * teacher
     * @param {String} name - contact name (required)
     * @param {String} phone - at least 8 characters
     * @param {String} course
     */
    constructor(name, phone, course) {
        super(name, phone);
        if (Courses.isExist(course)) {
            this.course = course;
        } else {
            throw `Error: the course ${course} is not valid! `;
        }
        this.students = [];
    }

    /**
     * add student to students list of the teacher
     * @param {Student|Student[]} students
     */
    addStudent(...students) {
        students.forEach(student => {
            if (this.students.includes(student)) {
                throw `Error: ${student.name} is already added`;
            } else {
                if (student.courses.includes(this.course)) {
                    this.students.push(student);
                }
                else {
                    throw `Error: the student ${student.name} does not have ${this.course} course, which ${this.name} teach!`;
                }
            }
        });
    }

    /**
     * list all the students names for that teacher.
     */
    showStudents() {
        if (this.students.length === 0) {
            console.log(`${this.name} has no students yet!`);
        } else {
            const teacherStudentsNames = this.students.map(s => s.name);
            console.log(`${this.name} students:\n ${teacherStudentsNames}\n`);
        }
    }
}