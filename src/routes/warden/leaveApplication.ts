import { Request, Response } from "express";
import { LeaveApplication, LeaveApplicationDocument } from "../../models/LeaveApplication";

/**
 * Create a new local account.
 * @route GET /warden/studentList
 */
export async function getLeaveApplications (req: Request, res: Response): Promise<void> {
    if(req.body.id) {
        await LeaveApplication.findById({ _id: req.body.id })
            .then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({ message: err.message })
            })
    } else {
        await LeaveApplication.find({})
            .then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({ message: err.message })
            })
    }
}