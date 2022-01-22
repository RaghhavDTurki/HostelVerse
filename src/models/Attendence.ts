import mongoose from "mongoose";

export type AttendenceDocument = mongoose.Document & {
    studentid: string;
    last_checkin: Date;
    last_checkout: Date;
};

const AttendenceSchema = new mongoose.Schema<AttendenceDocument>(
    {
        studentid: { type: String, unique: true, $ref: "Student" },
        last_checkin: Date,
        last_checkout: Date
    }
);

export const Attendence = mongoose.model<AttendenceDocument>("Attendence", AttendenceSchema);