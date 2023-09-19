const db = require('../config/database'); // Import your database connection

const Teacher = {
    getAllTeachers: function (callback) {
        db.query('SELECT * FROM Teachers', callback);
    },

    getTeacherById: function (id, callback) {
        db.query('SELECT * FROM Teachers WHERE TeacherID = ?', [id], callback);
    },

    createTeacher: function (newTeacher, callback) {
        db.query('INSERT INTO Teachers (FirstName, LastName, Email, Phone, SubjectID) VALUES (?, ?, ?, ?, ?)',
            [newTeacher.FirstName, newTeacher.LastName, newTeacher.Email, newTeacher.Phone, newTeacher.SubjectID],
            callback);
    },

    updateTeacher: function (id, updatedTeacher, callback) {
        db.query('UPDATE Teachers SET FirstName = ?, LastName = ?, Email = ?, Phone = ?, SubjectID = ? WHERE TeacherID = ?',
            [updatedTeacher.FirstName, updatedTeacher.LastName, updatedTeacher.Email, updatedTeacher.Phone, updatedTeacher.SubjectID, id],
            callback);
    },
};

module.exports = Teacher;
