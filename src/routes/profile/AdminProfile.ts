import { Request, Response } from "express";
import { Admin } from "../../models/Admin";

export async function AdminProfile(req: Request, res: Response): Promise<void> {
    if(!req.body.email){
        res.status(400).send({ message : "Email cannot be empty!"});
        return;
    }
    Admin.findOne({ email: req.body.email })
    .then(data => { res.send(data); })
    .catch(err => { res.send(404).send("Warden not found with that email!");});
}