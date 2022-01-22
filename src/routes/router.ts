import { Router } from "express";
import { createWardenAccount } from "./admin/createWardenAccount";
import { AdminLogin } from "./login/Admin.Login";
import { StudentLogin } from "./login/Student.Login";
import { WardenLogin } from "./login/Warden.login";
import { signupAdmin } from "./signup/Admin.Singup";
import { signupStudent } from "./signup/Student.Signup";
export const route: Router = Router();

// signup routes
route.post("/admin/signup", signupAdmin);
route.post("/student/signup", signupStudent);

// login routes
route.post("/student/login", StudentLogin);
route.post("/admin/login", AdminLogin);
route.post("/warden/login", WardenLogin);

// create warden account
route.post("/admin/createWardenAccount", createWardenAccount);
