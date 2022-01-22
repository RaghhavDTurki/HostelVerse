import mongoose from "mongoose";

export type AnnouncementDocument = mongoose.Document & {
    hostelid: string;
    wardenid: string;
    message: string;
};

const AnnouncementSchema = new mongoose.Schema<AnnouncementDocument>(
    {
        hostelid: { type: String, unique: true, $ref: "Hostel" },
        wardenid: { type: String, unique: true, $ref: "Warden" },
        message: String
    },
    { timestamps: true }
);

export const Announcement = mongoose.model<AnnouncementDocument>("Announcement", AnnouncementSchema);