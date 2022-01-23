import nodemailer from "nodemailer";
import { Request, Response } from "express";
import { SENDGRID_USER, SENDGRID_PASSWORD } from "../util/secrets";
const transporter = nodemailer.createTransport({
    service: "SendGrid",
    auth: {
        user: SENDGRID_USER,
        pass: SENDGRID_PASSWORD
    }
});

// const mailOptions = {
//     to: req.body.email,
//     from: ``,
//     subject: "Contact Form",
//     text: req.body.message
// };