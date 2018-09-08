import {Student} from "../libs/Student";
import {ContactsList} from "./ContactsList";

export class StudentsList extends ContactsList {
    constructor() {
        super();
        this.elementsType = 'student';
        this.instace = Student;
    }
}