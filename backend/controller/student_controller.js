const Student = require('../model/student_model')

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(201).json(students);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}

export const createStudent = async (req, res) => {
    const{firstName, lastName, course, year, enrolled} = req.body;
    try {
        const newStudent = new Student({firstName, lastName, course, year, enrolled: enrolled === "true" || enrolled === true,});
        const savedStudent = await newStudent.save();
        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

export const updateStudent = async (req, res) => {
    const{id} = req.params
    const{firstName, lastName, course, year, enrolled} = req.body;
    try {
        const updatedStudent = await Student.findByIdAndUpdate(id,{firstName,lastName,course,year,enrolled});
        res.status(201).json(updatedStudent);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

export const deleteStudent = async (req, res) => {
    const{id} = req.params
    try {
        const deleteStudent = await Student.findByIdAndDelete(id);
        res.status(204).json(deleteStudent);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}