import { Request, Response } from "express";
import { Attendence } from "../../models/Attendence";
import { Student } from "../../models/Student";

export async function StudentCheckIn(req:Request, res: Response): Promise<void> {
    const studentid = req.body.studentid;
    if(!studentid){
        res.status(400).send({ message : "Student ID cannot be empty!"});
        return;
    }
    console.log(studentid);
    const student = await Student.findOne({studentid: studentid});
    if(!student) {
        res.status(500).send("Student not found!");
        return;
    }
    Attendence.findOneAndUpdate({studentid: studentid}, {$set: {last_checkin: new Date()}}, {new: true}, (err, doc) => {
        if(err) {
            res.status(500).send({message: "Student not found!", err: err});
        } else {
            res.status(200).send("Checked In!");
        }
    });

}