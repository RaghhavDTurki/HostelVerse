import { Student, StudentDocument } from "../../models/Student";
import { Request, Response } from "express";
import axios from "axios";
import { MAP_QUEST_KEY } from "../../util/secrets";


const college_location = "Jaipur,Rajasthan";

interface MapQuestInterface{
    route:{
        distance: number
    }
}

async function getDistance(location: string): Promise<number> {
    // const query_url = `http://www.mapquestapi.com/directions/v2/route?key=${MAP_QUEST_KEY}&unit=k&from=${location}&to=${college_location}`;
    const query_url = `http://www.mapquestapi.com/directions/v2/route?key=${MAP_QUEST_KEY}&from=${location}&to=${college_location}`;
    // console.log(query_url);
    const distance = (await axios.get(query_url)).data;
    // console.log(distance);
    const answer = distance.route.distance;
    return answer;
}
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

    const distance = await getDistance(req.body.location);

    const student = new Student();
    student.email = req.body.email;
    student.password = req.body.password;
    student.studentid = req.body.studentid;
    student.profile.name = req.body.name;
    student.profile.email = req.body.email;
    student.profile.contactno = req.body.contactno;
    student.profile.location = req.body.location;
    student.profile.picture = student.gravatar(200);
    student.distance = distance;
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


