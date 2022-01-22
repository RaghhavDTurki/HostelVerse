import mongoose from "mongoose";

export type FeedbackDocument = mongoose.Document & {
    studentid: string;
    rating: number;
    message: string;
};

const FeedbackSchema = new mongoose.Schema<FeedbackDocument>(
    {
        studentid: { type: String, $ref: "Student" },
        message: String,
        rating: Number
    },
    { timestamps: true }
);

export const Feedback = mongoose.model<FeedbackDocument>("Feedback", FeedbackSchema);