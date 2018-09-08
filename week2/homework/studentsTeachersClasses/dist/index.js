/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_Student__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/Student */ "./src/libs/Student.js");
/* harmony import */ var _libs_Teacher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libs/Teacher */ "./src/libs/Teacher.js");
/* harmony import */ var _userInterfaceLibs_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userInterfaceLibs/render */ "./src/userInterfaceLibs/render.js");
/* harmony import */ var _libs_Courses__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./libs/Courses */ "./src/libs/Courses.js");





// ====================== Console test ======================

// teachers:
const abed = new _libs_Teacher__WEBPACK_IMPORTED_MODULE_1__["Teacher"]('Abed Sujan', '+4523655222', 'HTML&CSS');
const pcatana = new _libs_Teacher__WEBPACK_IMPORTED_MODULE_1__["Teacher"]('Petru Catana', '+4523111322', 'HTML&CSS');
const pankaj = new _libs_Teacher__WEBPACK_IMPORTED_MODULE_1__["Teacher"]('Pankaj', '+4523111222', 'JavaScript-Basics');
const benna100 = new _libs_Teacher__WEBPACK_IMPORTED_MODULE_1__["Teacher"]('Benjamin', '+4523123123', 'JavaScript-Advanced');
const marco = new _libs_Teacher__WEBPACK_IMPORTED_MODULE_1__["Teacher"]('Marco', '+4523232323', 'NodeJS');
const jounes = new _libs_Teacher__WEBPACK_IMPORTED_MODULE_1__["Teacher"]('Jounes', '+4523777000', 'React');
const christopher = new _libs_Teacher__WEBPACK_IMPORTED_MODULE_1__["Teacher"]('Christopher', '+4523333111', 'FinalProject');
const teachersArray = [abed, pcatana, pankaj, benna100, marco, jounes, christopher];

// students
const zuhair = new _libs_Student__WEBPACK_IMPORTED_MODULE_0__["Student"]('Zuhair', '+4591491462');
const krishna = new _libs_Student__WEBPACK_IMPORTED_MODULE_0__["Student"]('Krishna Rana', '+459555222');
const zeeshan = new _libs_Student__WEBPACK_IMPORTED_MODULE_0__["Student"]('Zeeshan', '+459555111');
const anu = new _libs_Student__WEBPACK_IMPORTED_MODULE_0__["Student"]('Anuradha', '+4590001444');
const zoey = new _libs_Student__WEBPACK_IMPORTED_MODULE_0__["Student"]('Zoey Zou', '+4590001666');
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
_userInterfaceLibs_render__WEBPACK_IMPORTED_MODULE_2__["renderCoursesDropDownMenu"](_libs_Courses__WEBPACK_IMPORTED_MODULE_3__["Courses"].all);
_userInterfaceLibs_render__WEBPACK_IMPORTED_MODULE_2__["insertIntoTeachersTable"](teachersArray);
_userInterfaceLibs_render__WEBPACK_IMPORTED_MODULE_2__["insertIntoStudentsTable"](studentsArray);


/***/ }),

/***/ "./src/libs/Contact.js":
/*!*****************************!*\
  !*** ./src/libs/Contact.js ***!
  \*****************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
class Contact {
    /**
     * contact
     * @param {String} name - contact name (required)
     * @param {String} phone - at least 8 characters
     */
    constructor(name, phone) {
        if (arguments.length !== 2) throw "Error: wrong number of arguments";
        if (typeof name !== 'string' || name.length === 0) {
            throw "Error: name is not a string or is too short";
        }
        if (typeof phone !== 'string' || phone.length < 8) {
            throw "Error: phone is not a string or is too short";
        }
        this.name = name;
        this.phone = phone;
    }
}

/***/ }),

/***/ "./src/libs/Courses.js":
/*!*****************************!*\
  !*** ./src/libs/Courses.js ***!
  \*****************************/
/*! exports provided: Courses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Courses", function() { return Courses; });
class Courses {

    static get all() {
        return ['HTML&CSS', 'JavaScript-Basics', 'JavaScript-Advanced', 'NodeJS', 'Databases', 'React', 'FinalProject'];
    }

    static isExist(course) {
        return this.all.includes(course);
    }
}


/***/ }),

/***/ "./src/libs/Student.js":
/*!*****************************!*\
  !*** ./src/libs/Student.js ***!
  \*****************************/
/*! exports provided: Student */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Student", function() { return Student; });
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact */ "./src/libs/Contact.js");
/* harmony import */ var _Courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Courses */ "./src/libs/Courses.js");



class Student extends _Contact__WEBPACK_IMPORTED_MODULE_0__["Contact"] {
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
            if (_Courses__WEBPACK_IMPORTED_MODULE_1__["Courses"].isExist(course)) {
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
        return Math.round((this.courses.length / _Courses__WEBPACK_IMPORTED_MODULE_1__["Courses"].all.length) * 100);
    }
}

/***/ }),

/***/ "./src/libs/Teacher.js":
/*!*****************************!*\
  !*** ./src/libs/Teacher.js ***!
  \*****************************/
/*! exports provided: Teacher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Teacher", function() { return Teacher; });
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact */ "./src/libs/Contact.js");
/* harmony import */ var _Courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Courses */ "./src/libs/Courses.js");



class Teacher extends _Contact__WEBPACK_IMPORTED_MODULE_0__["Contact"] {
    /**
     * teacher
     * @param {String} name - contact name (required)
     * @param {String} phone - at least 8 characters
     * @param {String} course
     */
    constructor(name, phone, course) {
        super(name, phone);
        if (_Courses__WEBPACK_IMPORTED_MODULE_1__["Courses"].isExist(course)) {
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

/***/ }),

/***/ "./src/userInterfaceLibs/ContactsList.js":
/*!***********************************************!*\
  !*** ./src/userInterfaceLibs/ContactsList.js ***!
  \***********************************************/
/*! exports provided: ContactsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsList", function() { return ContactsList; });
/* harmony import */ var _libs_Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/Contact */ "./src/libs/Contact.js");


class ContactsList {
    constructor() {
        this.list = [];
        this.elementsType = 'contact';
        this.instace = _libs_Contact__WEBPACK_IMPORTED_MODULE_0__["Contact"];
    }

    /**
     * add a new contact to contacts list
     * @param {Contact} contact
     * @returns {number} - last index of inserted item
     */
    add(contact) {
        if (!(contact instanceof this.instace)) {
            throw `Error: ${this.elementsType} must be an instance of ${this.elementsType}`;
        }
        if (this.search(contact.name) !== -1) {
            throw `Error: a ${this.elementsType} with the name ${contact.name} already exists`;
        }
        if (this.search(contact.phone, 'phone') !== -1) {
            throw `Error: a ${this.elementsType} with the phone ${contact.phone} already exists`;
        }
        this.list.push(contact);
        //return this.list.length - 1;
    }

    /**
     * search for a contact by key (key=name by default)
     * @param {String} value
     * @param {String} key?
     * @returns {number} - index
     */
    search(value, key = 'name') {
        return this.list.findIndex(contact => contact[key] === value);
    }

    /**
     * delete contact from list by name
     * @param {String} contactName
     */
    delete(contactName) {
        const index = this.search(contactName);
        if (index === -1) {
            throw `Error: Element is not fond in ${this.elementsType} list`;
        }
        else {
            this.list.splice(index, 1);
        }
    }
}

/***/ }),

/***/ "./src/userInterfaceLibs/StudentsList.js":
/*!***********************************************!*\
  !*** ./src/userInterfaceLibs/StudentsList.js ***!
  \***********************************************/
/*! exports provided: StudentsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentsList", function() { return StudentsList; });
/* harmony import */ var _libs_Student__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/Student */ "./src/libs/Student.js");
/* harmony import */ var _ContactsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactsList */ "./src/userInterfaceLibs/ContactsList.js");



class StudentsList extends _ContactsList__WEBPACK_IMPORTED_MODULE_1__["ContactsList"] {
    constructor() {
        super();
        this.elementsType = 'student';
        this.instace = _libs_Student__WEBPACK_IMPORTED_MODULE_0__["Student"];
    }
}

/***/ }),

/***/ "./src/userInterfaceLibs/TeachersList.js":
/*!***********************************************!*\
  !*** ./src/userInterfaceLibs/TeachersList.js ***!
  \***********************************************/
/*! exports provided: TeachersList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachersList", function() { return TeachersList; });
/* harmony import */ var _libs_Teacher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../libs/Teacher */ "./src/libs/Teacher.js");
/* harmony import */ var _ContactsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContactsList */ "./src/userInterfaceLibs/ContactsList.js");



class TeachersList extends _ContactsList__WEBPACK_IMPORTED_MODULE_1__["ContactsList"] {
    constructor() {
        super();
        this.elementsType = 'teacher';
        this.instace = _libs_Teacher__WEBPACK_IMPORTED_MODULE_0__["Teacher"];
    }
}

/***/ }),

/***/ "./src/userInterfaceLibs/render.js":
/*!*****************************************!*\
  !*** ./src/userInterfaceLibs/render.js ***!
  \*****************************************/
/*! exports provided: insertIntoTeachersTable, insertIntoStudentsTable, renderCoursesDropDownMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertIntoTeachersTable", function() { return insertIntoTeachersTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertIntoStudentsTable", function() { return insertIntoStudentsTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderCoursesDropDownMenu", function() { return renderCoursesDropDownMenu; });
/* harmony import */ var _TeachersList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TeachersList */ "./src/userInterfaceLibs/TeachersList.js");
/* harmony import */ var _libs_Teacher__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../libs/Teacher */ "./src/libs/Teacher.js");
/* harmony import */ var _StudentsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StudentsList */ "./src/userInterfaceLibs/StudentsList.js");
/* harmony import */ var _libs_Student__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/Student */ "./src/libs/Student.js");
/* harmony import */ var _libs_Courses__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/Courses */ "./src/libs/Courses.js");






// ----------------------------------------------------
// list of teachers
let teachers = new _TeachersList__WEBPACK_IMPORTED_MODULE_0__["TeachersList"]();

// list of students
let students = new _StudentsList__WEBPACK_IMPORTED_MODULE_2__["StudentsList"]();

// ----------------------------------------------------
/**
 * fill the teachers table with some teachers
 * @param {Teacher[]} teachersArray
 */
function insertIntoTeachersTable(teachersArray) {
    teachersArray.forEach(teacher => {
        teachers.add(teacher);
        renderTeacher(teacher);
    });
}

// ----------------------------------------------------
/**
 * fill the table of students with studentsArray
 * @param {Student[]} studentsArray
 */
function insertIntoStudentsTable(studentsArray) {
    studentsArray.forEach(student => {
        students.add(student);
        renderStudent(student);
    });
}

// ----------------------------------------------------

/**
 * fill list of courses with courses
 * @param {String[]} courses
 */
const renderCoursesDropDownMenu = (courses) => {
    let coursesList = ``;
    courses.forEach(course => {
        coursesList += `<option>${course}</option>`;
    });
    document.querySelector('#teacherCourseList').innerHTML = coursesList;
};

// ----------------------------------------------------
/**
 * remove contact (student/teacher) from table and list
 */
function removeContact() {
    const contactType = this.dataset.contact;
    try {
        // remove tr element from table
        const contactTableRow = this.parentNode.parentNode;
        contactTableRow.remove();

        // remove object from the list
        switch (contactType) {
            case 'teacher':
                teachers.delete(this.dataset.name);
                break;
            case 'student':
                students.delete(this.dataset.name);
                const studentName = this.dataset.name;

                // remove <li> elements which contains the deleted student name
                // TODO: remove student also from teacher students list
                document.querySelectorAll('li').forEach(item => {
                    if (item.innerHTML === studentName)
                        item.remove();
                });
                break;
        }
    } catch (error) {
        alert(error);
    }
}

// ----------------------------------------------------
/**
 * get student or teacher object by passing the name and type
 * @param {String} contactName - student name or teacher name
 * @param {String}contactType - "student" or "teacher"
 * @returns {Student|Teacher}
 */
const getContactObjectByName = (contactName, contactType) => {
    if (contactType === 'teacher') {
        const index = teachers.search(contactName);
        return teachers.list[index];
    }
    if (contactType === 'student') {
        const index = students.search(contactName);
        return students.list[index];
    }

};

// ----------------------------------------------------
/**
 * get students that have the same course that a teacher teach and not added before to his students list
 * @param {Teacher} teacher
 * @returns {String[]}
 */
const getPotentialStudents = teacher => {
    return students.list
        .filter(student => student.courses.includes(teacher.course))
        .map(student => student.name)
        .filter(student => !(teacher.students.map(student => student.name)).includes(student));
};
// ----------------------------------------------------
/**
 * create a list of checkbox buttons of students
 * @param {String[]} students
 * @param {String} teacherName
 * @returns {string}
 */
const createStudentsCheckBoxes = (students, teacherName) => {
    let studentsCheckBoxes = '';
    students.forEach((student, index) => {
        studentsCheckBoxes += `
                <div class="custom-control custom-checkbox">
                  <input type="checkbox" class="custom-control-input" 
                  data-teacher="${teacherName}" data-student="${student}" 
                  name="teacherStudents" id="student-${index}">
                  <label class="custom-control-label" for="student-${index}">${student}</label>
                </div>
            `;
    });
    return studentsCheckBoxes;
};
// ----------------------------------------------------
/**
 * when click on +student(s) button, show add teacher students dialog
 * @param {Element} addStudentsButton
 */
const renderAddTeacherStudents = addStudentsButton => {
    const errorsDiv = document.querySelector('#teacherStudentsErrors');
    const teacherStudentsList = document.querySelector('#teacherStudentsList');
    const saveTeacherStudentsBtn = document.querySelector('#saveTeacherStudents');
    addStudentsButton.addEventListener('click', function () {
        errorsDiv.innerHTML = '';
        teacherStudentsList.innerHTML = '';
        saveTeacherStudentsBtn.dataset.teacher = this.dataset.teacher;
        const teacher = getContactObjectByName(this.dataset.teacher, 'teacher');
        const studentsNotAdded = getPotentialStudents(teacher);
        const studentsCheckBoxes = createStudentsCheckBoxes(studentsNotAdded, teacher.name);
        if (studentsNotAdded.length === 0) {
            errorsDiv.innerHTML = `All students who have <b>${teacher.course}</b> 
                                     have already joined the <b>${teacher.name}</b> class  `;
        } else {
            errorsDiv.innerHTML = '';
            teacherStudentsList.innerHTML = studentsCheckBoxes;
            $('#teacherStudentsModal').modal('hide');
        }
    })
};
// ----------------------------------------------------
/**
 * get courses checkboxes which appears after click on add courses to student
 * @param {String[]} courses
 * @param {String} studentName
 * @returns {string}
 */
const getCoursesCheckBoxes = (courses, studentName) => {
    let coursesCheckBoxes = '';
    courses.forEach((course, index) => {
        coursesCheckBoxes += `
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" 
              data-course="${course}" data-student="${studentName}" 
              name="studentCourses" id="course-${index}">
              <label class="custom-control-label" for="course-${index}">${course}</label>
            </div>`;
    });
    return coursesCheckBoxes;
};
// ----------------------------------------------------
/**
 * render courses that not taken in +courses(s) form
 * @param {Element} addCoursesButton
 */
const renderAddStudentCourses = addCoursesButton => {
    const studentCoursesList = document.querySelector('#studentCoursesList');
    const errorsDiv = document.querySelector('#studentCoursesListErrors');
    const saveStudentCoursesBtn = document.querySelector('#saveStudentCourses');
    addCoursesButton.addEventListener('click', function () {
        studentCoursesList.innerHTML = '';
        errorsDiv.innerHTML = '';
        saveStudentCoursesBtn.dataset.student = this.dataset.student;
        const student = getContactObjectByName(this.dataset.student, 'student');
        const coursesNotAdded = _libs_Courses__WEBPACK_IMPORTED_MODULE_4__["Courses"].all.filter(course => !student.courses.includes(course));
        const courses = getCoursesCheckBoxes(coursesNotAdded, student.name);
        if (coursesNotAdded.length === 0) {
            errorsDiv.innerHTML = `${student.name} has finished all courses.`;
        } else {
            studentCoursesList.innerHTML = courses;
        }
    })
};

// ----------------------------------------------------

/**
 * Event listener for click on save teacher students button
 */
document.querySelector('#saveTeacherStudents').addEventListener('click', saveTeacherStudents);

function saveTeacherStudents() {
    const errorsDiv = document.querySelector('#teacherStudentsErrors');
    errorsDiv.innerHTML = ``;
    let selectedStudents = [];
    const teacher = getContactObjectByName(this.dataset.teacher, 'teacher');

    // get selected students
    document.querySelectorAll('input[name=teacherStudents]').forEach(checkbox => {
        if (checkbox.checked) {
            const student = getContactObjectByName(checkbox.dataset.student, 'student');
            // push selected student to selected students array
            selectedStudents.push(student);
        }
    });

    if (selectedStudents.length) {
        teacher.addStudent(...selectedStudents);
        renderTeacherStudents(teacher);
        $('#teacherStudentsModal').modal('hide');
    } else {
        errorsDiv.innerHTML = `You didn't selected any student!`;
    }
}

// ----------------------------------------------------
/**
 * listen to save student courses button clicks, then add selected courses to student
 */
document.querySelector('#saveStudentCourses').addEventListener('click', saveStudentCourses);

function saveStudentCourses() {
    const errorsDiv = document.querySelector('#studentCoursesListErrors');
    const studentCoursesList = document.querySelector('#studentCoursesList');
    // clear errors div
    errorsDiv.innerHTML = ``;
    let selectedCourses = [];
    const student = getContactObjectByName(this.dataset.student, 'student');

    // get selected subjects
    document.querySelectorAll('input[name=studentCourses]').forEach(checkbox => {
        if (checkbox.checked) {
            const course = checkbox.dataset.course;
            // push selected student to selected students array
            selectedCourses.push(course);
        }
    });
    if (selectedCourses.length) {
        student.addCourses(...selectedCourses);
        studentCoursesList.innerHTML = '';
        renderStudentCourses(student);
        renderStudentProgress(student);
        $('#studentCoursesModal').modal('hide');
    } else {
        errorsDiv.innerHTML = `You didn't selected any course!`;
    }
}

// ----------------------------------------------------
/**
 * after adding new courses, update progress bar
 * @param {Student} student
 */
const renderStudentProgress = student => {
    const progress = student.countProgress();
    document.querySelector(`[data-progressstudent="${student.name}"]`).innerHTML =
        ` <div class="progress-bar bg-primary" role="progressbar" 
            style="width: ${progress}%" 
            aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
            ${progress} %
          </div>`;
};
// ----------------------------------------------------
/**
 * refresh student ul after adding courses
 * @param {Student} student
 */
const renderStudentCourses = student => {
    const studentCourses = student.courses.map(course => `<li>${course}</li>`);
    document.querySelector(`[data-rowstudents='${student.name}'] #studentCourses`)
        .innerHTML = studentCourses.join('');
};
// ----------------------------------------------------
/**
 * re-render teacher students after selecting new students
 * @param {Teacher} teacher
 */
const renderTeacherStudents = teacher => {
    const teacherStudents = teacher.students.map(student => `<li>${student.name}</li>`);
    document.querySelector(`[data-rowteacher='${teacher.name}'] .teacherStudents`)
        .innerHTML = teacherStudents.join('');
};

// ----------------------------------------------------
/**
 * Add new row for teachers table, contains teacher name, phone, and course that he/she teach.{String}
 * @param {Teacher} teacher
 */
const renderTeacher = teacher => {
    const students = teacher.students.map(student => `<li>${student.name}</li>`);
    const tr = document.createElement('tr');
    tr.setAttribute('data-rowteacher', `${teacher.name}`);
    tr.innerHTML = `
                <td>
                    <p class="mb-1"><i class="ti-user"></i> ${teacher.name}</p>
                    <p class="mb-1"><i class="ti-mobile"></i> ${teacher.phone}</p>
                </td>
                <td>${teacher.course}</td>
                <td>
                    <a href="#" data-toggle="modal" data-target="#teacherStudentsModal"
                        data-teacher="${teacher.name}" class="btn btn-sm btn-outline-dark ripple ml-4 addTeacherStudents">
                        <i class="ti-plus"></i> student(s)</a>
                    <ul class="teacherStudents">${students.join('')}</ul>
                </td>
                <td>
                    <span data-contact="teacher" data-name="${teacher.name}" class="btn btn-sm btn-danger removeTeacher">
                    <i class="ti-trash"></i></span>
                </td>
                `;

    document.querySelector('#teachersTable>tbody').appendChild(tr);
    tr.querySelectorAll('.removeTeacher').forEach(button => {
        button.addEventListener('click', removeContact);
    });
    tr.querySelectorAll('.addTeacherStudents').forEach(renderAddTeacherStudents);
};

// ----------------------------------------------------
/**
 * add row to students table, contains passed student
 * @param {Student} student
 */
const renderStudent = student => {
    const courses = student.courses.map(course => `<li>${course}</li>`);
    let tr = document.createElement('tr');
    tr.setAttribute('data-rowstudents', `${student.name}`);
    tr.innerHTML = `
                <td>
                    <p class="mb-1"><i class="ti-user"></i> ${student.name}</p>
                    <p class="mb-1"><i class="ti-mobile"></i> ${student.phone}</p>
                </td>
                <td>
                <a href="#" data-student="${student.name}"
                data-toggle="modal" data-target="#studentCoursesModal"
                class="btn btn-sm btn-outline-dark ripple ml-4 addStudentCourses">
                        <i class="ti-plus"></i> course(s)</a>
                    <ul id="studentCourses">${courses.join('')}</ul>
                    
                    <div data-progressstudent="${student.name}" class="progress">
                      <div class="progress-bar bg-primary" role="progressbar" 
                        style="width: ${student.countProgress()}%" 
                        aria-valuenow="${student.countProgress()}" aria-valuemin="0" aria-valuemax="100">
                        ${student.countProgress()} %
                      </div>
                    </div>
                    
                </td>
                <td>
                    <span data-contact="student" data-name="${student.name}" class="btn btn-sm btn-danger ripple deleteStudent">
                    <i class="ti-trash"></i></span>
                </td>
                `;

    document.querySelector('#studentsTable>tbody').appendChild(tr);
    tr.querySelectorAll('.deleteStudent').forEach(button => {
        button.addEventListener('click', removeContact);
    });
    tr.querySelectorAll('.addStudentCourses').forEach(renderAddStudentCourses);
};

// ----------------------------------------------------
/**
 * Listen to Save teacher button, then add New teacher
 */
// listen to save teacher button
document.querySelector('#save-teacher-button').addEventListener('click', saveTeacher);

function saveTeacher() {
    // get teacher name, phone, course
    const teacherName = document.querySelector('#teacher-name').value.trim();
    const teacherPhone = document.querySelector('#teacher-phone').value.trim();
    const optionsMenu = document.querySelector('#teacherCourseList');
    const course = optionsMenu.options[optionsMenu.selectedIndex].text;
    // helper elements (to view errors messages)
    const teacherNameHelp = document.querySelector('#teacherNameHelp');
    const teacherMobileHelp = document.querySelector('#teacherMobileHelp');
    const addNewTeacherErrors = document.querySelector('#addNewTeacherErrors');
    // to clear error messages if there is a message
    teacherNameHelp.innerHTML = '';
    teacherMobileHelp.innerHTML = '';
    addNewTeacherErrors.innerHTML = '';
    // default variable for errors
    let error = false;
    if (teacherName <= 1) {
        teacherNameHelp.innerHTML = 'teacher name is empty or too short!';
        error = true;
    }
    if (teacherPhone < 8) {
        teacherMobileHelp.innerHTML = 'teacher phone must be at least 8 characters';
        error = true;
    }
    if (!error) {
        try {
            const teacher = new _libs_Teacher__WEBPACK_IMPORTED_MODULE_1__["Teacher"](teacherName, teacherPhone, course);
            teachers.add(teacher);
            renderTeacher(teacher);
            $('#teacherModal').modal('hide');
        } catch (error) {
            addNewTeacherErrors.innerHTML = error;
        }
    }
}

// ----------------------------------------------------
/**
 * Listen to Save student button, then add New student
 */

// listen to save student button
document.querySelector('#saveStudent').addEventListener('click', saveStudent);

function saveStudent() {
// get student name, phone
    const studentName = document.querySelector('#student-name').value.trim();
    const studentPhone = document.querySelector('#student-phone').value.trim();
// helper elements (to view errors messages)
    const studentNameHelp = document.querySelector('#studentNameHelp');
    const studentMobileHelp = document.querySelector('#studentMobileHelp');
    const addNewStudentErrors = document.querySelector('#addNewStudentErrors');
// to clear error messages if there is a message
    studentNameHelp.innerHTML = '';
    studentMobileHelp.innerHTML = '';
    addNewStudentErrors.innerHTML = '';
// default variable for errors
    let error = false;
    if (studentName <= 1) {
        studentNameHelp.innerHTML = 'student name is empty or too short!';
        error = true;
    }
    if (studentPhone < 8) {
        studentMobileHelp.innerHTML = 'student phone must be at least 8 characters';
        error = true;
    }
    if (!error) {
        try {
            const student = new _libs_Student__WEBPACK_IMPORTED_MODULE_3__["Student"](studentName, studentPhone);
            students.add(student);
            renderStudent(student);
        } catch (error) {
            addNewStudentErrors.innerHTML = error;
        }
    }
}


/***/ })

/******/ });
//# sourceMappingURL=index.js.map