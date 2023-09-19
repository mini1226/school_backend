const Teacher = require('../models/teacherModel');

const TeacherController = {
    getAllTeachers: function (req, res) {
        Teacher.getAllTeachers(function (err, results) {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: 'Error retrieving teachers.' });
            }
            res.status(200).json({ success: true, teachers: results });
        });
    },

    getTeacherById: function (req, res) {
        const id = req.params.id;
        Teacher.getTeacherById(id, function (err, result) {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: 'Error retrieving teacher.' });
            }
            if (result.length === 0) {
                return res.status(404).json({ success: false, message: 'Teacher not found.' });
            }
            res.status(200).json({ success: true, teacher: result[0] });
        });
    },

    createTeacher: function (req, res) {
        const newTeacher = req.body;
        Teacher.createTeacher(newTeacher, function (err, result) {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: 'Error creating teacher.' });
            }
            res.status(201).json({ success: true, message: 'Teacher created successfully.', teacherId: result.insertId });
        });
    },

    updateTeacher: function (req, res) {
        const id = req.params.id;
        const updatedTeacher = req.body;
        Teacher.updateTeacher(id, updatedTeacher, function (err, result) {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: 'Error updating teacher.' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ success: false, message: 'Teacher not found.' });
            }
            res.status(200).json({ success: true, message: 'Teacher updated successfully.' });
        });
    },
};

module.exports = TeacherController;
