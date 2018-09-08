import {Teacher} from "../libs/Teacher";
import {ContactsList} from "./ContactsList";

export class TeachersList extends ContactsList {
    constructor() {
        super();
        this.elementsType = 'teacher';
        this.instace = Teacher;
    }
}