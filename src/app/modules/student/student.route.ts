import express from 'express'
import { StudentController } from './student.controller'

const router = express.Router()  //it will give me a router object

//will call controller function
router.post('/create-student', StudentController.createStudent);

router.get('/', StudentController.getAllStudents);
router.get('/:studentId', StudentController.getSingleStudent)

export const StudentRoutes = router;