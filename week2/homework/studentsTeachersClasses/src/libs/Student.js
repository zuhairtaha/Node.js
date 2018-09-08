import {Contact} from "./Contact";
import {Courses} from "./Courses";

export class Student extends Contact {
    /**
     * create a new student
     * @param {String} name - contact name (required)
     * @param {String} phone - at least 8 characters
     */
    constructor(name, phone) {
        super(name, phone);
        this.progress = 0;
        this.courses = [];
    }

    /**
     * add the courses the students has taken
     * @param {String|String[]} course
     */
    addCourses(...course) {
        course.forEach(course => {
            if (Courses.isExist(course)) {
                if (this.courses.includes(course)) {
                    throw `${course} is already added to ${this.name}`;
                } else {
                    // add the course
                    this.courses.push(course);
                }
            } else {
                throw `Error: the course ${course} is not valid! `;
            }
        });
    }

    /**
     * count and return student progress
     * @returns {number}
     */
    countProgress() {
        return Math.round((this.courses.length / Courses.all.length) * 100);
    }
}