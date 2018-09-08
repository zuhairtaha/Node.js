export class Courses {

    static get all() {
        return ['HTML&CSS', 'JavaScript-Basics', 'JavaScript-Advanced', 'NodeJS', 'Databases', 'React', 'FinalProject'];
    }

    static isExist(course) {
        return this.all.includes(course);
    }
}
