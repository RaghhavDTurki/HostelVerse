import { Admin } from "../../models/Admin";
import { Request, Response } from "express";

/**
 * Create a new local account.
 * @route POST /admin/signup
 */
export const signupAdmin = async (req: Request, res: Response): Promise<void> => {
    // Validate Request
    if(!req.body)
    {
        console.log(req.body);
        res.status(400).send({ message : "Content cannot be empty!"});
        return;
    }

    // Check if user already exists with the given email
    if(await Admin.findOne({ email: req.body.email })){
        res.status(400).send({ message: "User with that email already exists!" });
        return;
    }

    const admin = new Admin();
    admin.email = req.body.email;
    admin.password = req.body.password;
    admin.adminid = req.body.adminid;
    admin.profile.picture = admin.gravatar(200);
    admin.save()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    });
    
};


