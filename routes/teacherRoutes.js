const express = require('express');
const router = express.Router();
const TeacherController = require('../controllers/teacherController');

// Route to get all teachers
router.get('/', TeacherController.getAllTeachers);

// Route to get a teacher by ID
router.get('/:id', TeacherController.getTeacherById);

// Route to create a new teacher
router.post('/', TeacherController.createTeacher);

// Route to update a teacher by ID
router.put('/:id', TeacherController.updateTeacher);

module.exports = router;
