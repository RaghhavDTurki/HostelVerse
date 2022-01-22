import { Request, Response } from "express";
import { RoomIssue, RoomIssueDocument } from "../../models/RoomIssue";

/**
 * Create a new local account.
 * @route GET /warden/studentList
 */
export async function getRoomIssues (req: Request, res: Response): Promise<void> {
    if(req.body.id) {
        await RoomIssue.findById({ _id: req.body.id })
            .then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({ message: err.message })
            })
    } else {
        await RoomIssue.find({})
            .then(data => {
                res.send(data)
            }).catch(err => {
                res.status(500).send({ message: err.message })
            })
    }
}