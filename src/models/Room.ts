import mongoose from "mongoose";

export type RoomDocument = mongoose.Document & {
    hostelid: string;
    roomno: string;
    allotmentstatus: boolean;
    studentid: string | null;
};

const RoomSchema = new mongoose.Schema<RoomDocument>(
    {
        hostelid: { type: String, $ref: "Hostel" },
        roomno: String,
        allotmentstatus: { type: Boolean, default: false },
        studentid: { type: String, $ref: "Student", default: null }
    }
);

export const Room = mongoose.model<RoomDocument>("Room", RoomSchema);