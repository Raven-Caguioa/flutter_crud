const express = require("express");
const studentController = require('../controller/student_controller')

const router = express.Router();
router.get('/',studentController.getStudents)
router.post('/',studentController.createStudent)
router.put('/:id',studentController.updateStudent)
router.delete('/:id',studentController.deleteStudent)

module.exports = router;