import { Student } from "../../models/Student";
import { Request, Response } from "express";

/**
 * Create a new local account.
 * @route POST /student/signup
 */
export const signupStudent = async (req: Request, res: Response): Promise<void> => {
    // Validate Request
    if(!req.body)
    {
        console.log(req.body);
        res.status(400).send({ message : "Content cannot be empty!"});
        return;
    }

    // Check if user already exists with the given email
    if(await Student.findOne({ email: req.body.email })){
        res.status(400).send({ message: "User with that email already exists!" });
        return;
    }

    const student = new Student();
    student.email = req.body.email;
    student.password = req.body.password;
    student.studentid = req.body.studentid;
    student.profile.name = req.body.name;
    student.profile.email = req.body.email;
    student.profile.contactno = req.body.contactno;
    student.profile.location = req.body.location;
    student.profile.picture = student.gravatar(200);
    student.save()
    .then(data => {
        res.status(200).send(data);
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    });
    
};


