const db = require('../config/database'); // Import your database connection

const Subject = {
    getAllSubjects: function (callback) {
        db.query('SELECT * FROM Subjects', callback);
    },

    getSubjectById: function (id, callback) {
        db.query('SELECT * FROM Subjects WHERE SubjectID = ?', [id], callback);
    },

    createSubject: function (newSubject, callback) {
        db.query('INSERT INTO Subjects (SubjectName, Description) VALUES (?, ?)', [newSubject.SubjectName, newSubject.Description], callback);
    },

    updateSubject: function (id, updatedSubject, callback) {
        db.query('UPDATE Subjects SET SubjectName = ?, Description = ? WHERE SubjectID = ?', [updatedSubject.SubjectName, updatedSubject.Description, id], callback);
    },
};

module.exports = Subject;
