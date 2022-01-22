import { Room } from "../../models/Room";
import { Request, Response } from "express";

/**
 * Create a room entry
 * @route POST /admin/createroom
 */
export const createRoom = async (req: Request, res: Response): Promise<void> => {
    // Validate Request
    if(!req.body)
    {
        console.log(req.body);
        res.status(400).send({ message : "Content cannot be empty!"});
        return;
    }

    const room = new Room(); 
    room.hostelid = req.body.hostelid;
    room.roomno = req.body.roomno;
    room.save()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message : err.message || "Some error occurred while creating a create operation"
        });
    });
    
};


