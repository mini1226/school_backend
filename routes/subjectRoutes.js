const express = require('express');
const router = express.Router();
const SubjectController = require('../controllers/subjectController');

// Route to get all subjects
router.get('/', SubjectController.getAllSubjects);

// Route to get a subject by ID
router.get('/:id', SubjectController.getSubjectById);

// Route to create a new subject
router.post('/', SubjectController.createSubject);

// Route to update a subject by ID
router.put('/:id', SubjectController.updateSubject);

// Route to delete a subject by ID
router.delete('/:id', SubjectController.deleteSubject);

module.exports = router;
