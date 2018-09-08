import {TeachersList} from './TeachersList';
import {Teacher} from "../libs/Teacher";
import {StudentsList} from "./StudentsList";
import {Student} from "../libs/Student";
import {Courses} from "../libs/Courses";

// ----------------------------------------------------
// list of teachers
let teachers = new TeachersList();

// list of students
let students = new StudentsList();

// ----------------------------------------------------
/**
 * fill the teachers table with some teachers
 * @param {Teacher[]} teachersArray
 */
export function insertIntoTeachersTable(teachersArray) {
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
export function insertIntoStudentsTable(studentsArray) {
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
export const renderCoursesDropDownMenu = (courses) => {
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
        const coursesNotAdded = Courses.all.filter(course => !student.courses.includes(course));
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
            const teacher = new Teacher(teacherName, teacherPhone, course);
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
            const student = new Student(studentName, studentPhone);
            students.add(student);
            renderStudent(student);
        } catch (error) {
            addNewStudentErrors.innerHTML = error;
        }
    }
}
