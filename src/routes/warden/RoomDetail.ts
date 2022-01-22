import { Request, Response } from "express";
import { Room } from "../../models/Room";
import { Student } from "../../models/Student";

export async function RoomDetail(req: Request, res: Response): Promise<void> {
    const students = await Student.find({});
    const rooms = await Room.find({});
    const roomDetail = [];
    for(let index = 0; index < rooms.length; index++) {
        const room = rooms[index];

        const students_in_room = students.filter(student => student.roomid === room.roomno);
        console.log(students_in_room);
        const roomDetail_item = {
            hostelid: room.hostelid,
            roomno: room.roomno,
            allotmentstatus: room.allotmentstatus,
            studentid: room.studentid,
            ...students_in_room[0].profile
        };
        roomDetail.push(roomDetail_item);
    }
    res.send(roomDetail);
}
