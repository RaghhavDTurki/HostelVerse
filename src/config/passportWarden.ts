import { Request, Response, NextFunction } from "express";
import { NativeError } from "mongoose";
import passport from "passport";
import passportLocal from "passport-local";
import { Warden, WardenDocument } from "../models/Warden";

const LocalStrategy = passportLocal.Strategy;

passport.serializeUser<any, any>((req, user, done) => {
    done(undefined, user);
});

passport.deserializeUser((id, done) => {
    Warden.findById(id, (err: NativeError, user: WardenDocument) => done(err, user));
});


const passportWardenConfig = new LocalStrategy({ usernameField: "email" }, (email, password, done) => {
    Warden.findOne({ email: email.toLowerCase() }, (err: NativeError, user: WardenDocument) => {
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

    passport.use("warden-local", passportWardenConfig);

export const isAuthenticated = (req: Request, res: Response, next: NextFunction): void => {
    if (req.isAuthenticated()) {
        return next();
    }
};