import mongoose from "mongoose";

export type RoomDocument = mongoose.Document & {
    hostelid: string;
    roomno: string;
    allotmentstatus: boolean;
    studentid: string | null;
};

const RoomSchema = new mongoose.Schema<RoomDocument>(
    {
        hostelid: { type: String, unique: true, $ref: "Hostel" },
        roomno: String,
        allotmentstatus: Boolean,
        studentid: { type: String, unique: true, $ref: "Student" }
    }
);

export const Room = mongoose.model<RoomDocument>("Room", RoomSchema);