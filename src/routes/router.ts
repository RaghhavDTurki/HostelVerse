import { Router } from "express";
import { AllotHostel } from "../service/HostelAllotment";
import { createHostel } from "./admin/createHostel";
import { createRoom } from "./admin/createRoom";
import { createWardenAccount } from "./admin/createWardenAccount";
import { StudentCheckIn } from "./CheckIn_Out/CheckIn";
import { StudentCheckOut } from "./CheckIn_Out/CheckOut";
import { getHostelList } from "./HostelList/getHostList";
import { AdminLogin } from "./login/Admin.Login";
import { StudentLogin } from "./login/Student.Login";
import { WardenLogin } from "./login/Warden.login";
import { AdminProfile } from "./profile/AdminProfile";
import { StudentProfile } from "./profile/StudentProfile";
import { WardenProfile } from "./profile/WardenProfile";
import { signupAdmin } from "./signup/Admin.Singup";
import { signupStudent } from "./signup/Student.Signup";
export const route: Router = Router();

route.get("/allotHostel", AllotHostel);
route.get("/getHostelList", getHostelList);

// signup routes
route.post("/admin/signup", signupAdmin);
route.post("/student/signup", signupStudent);

// login routes
route.post("/student/login", StudentLogin);
route.post("/admin/login", AdminLogin);
route.post("/warden/login", WardenLogin);

// admin routes
route.post("/admin/createWardenAccount", createWardenAccount);
route.post("/admin/createhostel", createHostel);
route.post("/admin/createroom", createRoom);

// Get Profiles
route.get("/admin/profile", AdminProfile);
route.get("/warden/profile", WardenProfile);
route.get("/student/profile", StudentProfile);

// Student Check In/Out
route.get("/student/checkin/:id", StudentCheckIn);
route.get("/student/checkout/:id", StudentCheckOut);