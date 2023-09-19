const Subject = require('../models/subjectModel');

const SubjectController = {
    getAllSubjects: function (req, res) {
        Subject.getAllSubjects(function (err, results) {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: 'Error retrieving subjects.' });
            }
            res.status(200).json({ success: true, subjects: results });
        });
    },

    getSubjectById: function (req, res) {
        const id = req.params.id;
        Subject.getSubjectById(id, function (err, result) {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: 'Error retrieving subject.' });
            }
            if (result.length === 0) {
                return res.status(404).json({ success: false, message: 'Subject not found.' });
            }
            res.status(200).json({ success: true, subject: result[0] });
        });
    },

    createSubject: function (req, res) {
        const newSubject = req.body;
        Subject.createSubject(newSubject, function (err, result) {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: 'Error creating subject.' });
            }
            res.status(201).json({ success: true, message: 'Subject created successfully.', subjectId: result.insertId });
        });
    },

    updateSubject: function (req, res) {
        const id = req.params.id;
        const updatedSubject = req.body;
        Subject.updateSubject(id, updatedSubject, function (err, result) {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: 'Error updating subject.' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ success: false, message: 'Subject not found.' });
            }
            res.status(200).json({ success: true, message: 'Subject updated successfully.' });
        });
    },


    deleteSubject: function (req, res) {
        const id = req.params.id;
        Subject.deleteSubject(id, function (err, result) {
            if (err) {
                console.error(err);
                return res.status(500).json({ success: false, message: 'Error deleting subject.' });
            }
            if (result.affectedRows === 0) {
                return res.status(404).json({ success: false, message: 'Subject not found.' });
            }
            res.status(200).json({ success: true, message: 'Subject deleted successfully.' });
        });
    },


};

module.exports = SubjectController;
