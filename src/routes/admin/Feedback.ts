import { Request, Response } from "express";
import { Feedback } from "../../models/Feedback";

export async function viewFeedback(req: Request, res: Response): Promise<void>{
    if(!req.body){
        res.status(400).send({ message : "Body cannot be empty!"});
        return;
    }

    if(!req.body.id){
        const feedbacks = Feedback.find();
        res.send(feedbacks);
    }
    else{
        const feedback = Feedback.findById(req.body.id);
        res.send(feedback);
    }
}