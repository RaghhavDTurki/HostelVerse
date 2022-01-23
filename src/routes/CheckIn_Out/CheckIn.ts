import { Request, Response } from "express";
import { Attendence } from "../../models/Attendence";
import { Student } from "../../models/Student";

export async function StudentCheckIn(req:Request, res: Response): Promise<void> {
    const studentid = req.body.studentid;
    if(!studentid){
        res.status(400).send({ message : "Student ID cannot be empty!"});
        return;
    }
    // console.log(studentid);
    const student = await Student.findOne({studentid: studentid});
    if(!student) {
        res.status(500).send("Student not found!");
        return;
    }
    Attendence.findOne({ studentid: studentid})
    .then(studentLog => {
        const last_checkin = studentLog.last_checkin;
        const last_checkout = studentLog.last_checkout;
        if(last_checkout > last_checkin || last_checkout == null) {
            Attendence.updateOne({ studentid: studentid }, { last_checkin: new Date() })
            .then(data => {
                res.send({ messgae: "Checked in successfully!"});
            })
            .catch(err => {
                res.status(500).send({ message: "Error occured while checking in!"});
            });
        }
        else{
            res.status(400).send({ message: "You have already checked in!"});
        }
    })
    .catch(err => {
        res.status(500).send({ message: "Student not found in Attendence DB"});
    });

}