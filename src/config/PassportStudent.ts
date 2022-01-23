import { Request, Response, NextFunction } from "express";
import { NativeError } from "mongoose";
import passport from "passport";
import passportLocal from "passport-local";
import { Student, StudentDocument } from "../models/Student";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((req, user, done) => {
    done(undefined, user);
});

passport.deserializeUser((id, done) => {
    Student.findById(id, (err: NativeError, user: StudentDocument) => done(err, user));
});


const passportStudentConfig = new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    Student.findOne({ email: email }, (err: NativeError, user: StudentDocument) => {
        if (err) { return done(err); }
        if (!user) {
            return done(undefined, false, { message: `Email ${email} not found.` });
        }
        user.comparePassword(password, (err: Error, isMatch: boolean) => {
            if (err) { return done(err); }
            if (isMatch) {
                return done(undefined, user);
            }
            return done(undefined, false, { message: "Invalid email or password." });
        });
    });
});

    passport.use("student-local", passportStudentConfig);

export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
    if (req.isAuthenticated()) {
        return next();
    }
};