import {Student} from "./libs/Student";
import {Teacher} from "./libs/Teacher";
import * as render from './userInterfaceLibs/render';
import {Courses} from "./libs/Courses";

// ====================== Console test ======================

// teachers:
const abed = new Teacher('Abed Sujan', '+4523655222', 'HTML&CSS');
const pcatana = new Teacher('Petru Catana', '+4523111322', 'HTML&CSS');
const pankaj = new Teacher('Pankaj', '+4523111222', 'JavaScript-Basics');
const benna100 = new Teacher('Benjamin', '+4523123123', 'JavaScript-Advanced');
const marco = new Teacher('Marco', '+4523232323', 'NodeJS');
const jounes = new Teacher('Jounes', '+4523777000', 'React');
const christopher = new Teacher('Christopher', '+4523333111', 'FinalProject');
const teachersArray = [abed, pcatana, pankaj, benna100, marco, jounes, christopher];

// students
const zuhair = new Student('Zuhair', '+4591491462');
const krishna = new Student('Krishna Rana', '+459555222');
const zeeshan = new Student('Zeeshan', '+459555111');
const anu = new Student('Anuradha', '+4590001444');
const zoey = new Student('Zoey Zou', '+4590001666');
const studentsArray = [zuhair, krishna, zeeshan, anu, zoey];

// add courses to students
zuhair.addCourses('JavaScript-Advanced');
krishna.addCourses('HTML&CSS', 'JavaScript-Basics');
zoey.addCourses('HTML&CSS', 'JavaScript-Basics', 'JavaScript-Advanced');
anu.addCourses('HTML&CSS', 'JavaScript-Basics', 'JavaScript-Advanced', 'NodeJS');
zeeshan.addCourses('HTML&CSS', 'JavaScript-Basics', 'JavaScript-Advanced', 'NodeJS', 'Databases', 'React', 'FinalProject');

// add students to teachers
abed.addStudent(krishna, anu, zeeshan);
pcatana.addStudent(krishna);
pankaj.addStudent(anu, zoey);
benna100.addStudent(zuhair);
marco.addStudent(anu);
jounes.addStudent(zeeshan);
christopher.addStudent(zeeshan);

// show teachers students
abed.showStudents();
pcatana.showStudents();
pankaj.showStudents();
benna100.showStudents();
marco.showStudents();
jounes.showStudents();
christopher.showStudents();

// students progresses
console.log(`${zuhair.name} progress = ${zuhair.countProgress()} %`);
console.log(`${krishna.name} progress = ${krishna.countProgress()} %`);
console.log(`${zoey.name} progress = ${zoey.countProgress()} %`);
console.log(`${anu.name} progress = ${anu.countProgress()} %`);
console.log(`${zeeshan.name} progress = ${zeeshan.countProgress()} %`);

// ====================== User Interface ======================
render.renderCoursesDropDownMenu(Courses.all);
render.insertIntoTeachersTable(teachersArray);
render.insertIntoStudentsTable(studentsArray);
