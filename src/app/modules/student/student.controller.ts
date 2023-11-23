import { Request, Response } from "express";
import { StudentSurvices } from "./student.service";

const createStudent = async(req:Request, res:Response) => {
   try {
    const student = req.body.student;
    //will call survice function to send this data
      const result = await StudentSurvices.createStudentIntoDB(student)
   //send response
   res.status(200).json({
     success:true,
     massage: "Student is created successfully",
     data: result,
   });
   }
   catch(err){
    console.log(err);
   }
};


const getAllStudents= async( req:Request,res:Response)=>{
    try{
const result = await StudentSurvices.getAllStudentFromDB()
res.status(200).json({
    success:true,
    massage: "Student is retrive successfully",
    data: result,
  });
    }
    catch(err){
        console.log(err)
    }
};


const getSingleStudent = async(req:Request, res:Response)=> {
    try{
   const {studentId}= req.params;
   const result= await StudentSurvices.getSingleStudentFromDB(studentId);
   res.status(200).json({
    success:true,
    massage: "Student is retrive successfully",
    data: result,
  })
    }
    catch(err){
        console.log(err)
    }
} 


export const StudentController= {
    createStudent,
    getAllStudents,
    getSingleStudent

}