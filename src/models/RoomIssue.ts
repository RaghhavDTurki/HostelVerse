import mongoose from "mongoose";

export type RoomIssueDocument = mongoose.Document & {
    hostelid: string;
    roomno: string;
    remarks: string;
    created_at: Date;
    status: string;
};

const RoomIssueSchema = new mongoose.Schema<RoomIssueDocument>(
    {
        hostelid: { type: String, $ref: "Hostel" },
        roomno: {type: String, $ref: "Room"},
        remarks: String,
        created_at: { type: Date, default: Date.now },
        status: String
    }
);

export const RoomIssue = mongoose.model<RoomIssueDocument>("RoomIssue", RoomIssueSchema);