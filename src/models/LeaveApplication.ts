import mongoose from "mongoose";

export type LeaveApplicationDocument = mongoose.Document & {
    studentid: string;
    message: string;
    date_from: Date;
    date_to: Date;
};

const LeaveApplicationSchema = new mongoose.Schema<LeaveApplicationDocument>(
    {
        studentid: String,
        message: String,
        date_to: Date,
        date_from: Date
    }
);

export const RoomIssue = mongoose.model<LeaveApplicationDocument>("RoomIssue", LeaveApplicationSchema);