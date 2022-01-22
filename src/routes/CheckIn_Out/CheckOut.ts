import { Request, Response } from "express";
import { Student } from "../../models/Student";
import { Attendence } from "../../models/Attendence";

export const StudentCheckOut = async (req:Request, res: Response): Promise<void> => {
    const studentid = <string>req.params.id;
    console.log(studentid);
    const student = await Student.findOne({ studentid: studentid });
    if(!student) {
        res.status(500).send("Student not found!");
        return;
    }
    Attendence.findOneAndUpdate({ studentid }, { $set: { last_checkout: new Date() } }, { new: true }, (err, doc) => {
        if (err) {
            res.status(500).send({ message: "Student not found!", err: err });
        } else {
            res.status(200).send("Checked Out!");
        }
    });
};
