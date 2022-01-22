import { Router } from "express";
import { AllotHostel } from "../service/HostelAllotment";
import { createHostel } from "./admin/createHostel";
import { createRoom } from "./admin/createRoom";
import { createWardenAccount } from "./admin/createWardenAccount";
import { getDashboard } from "./admin/Dashboard";
import { viewFeedback } from "./admin/Feedback";
import { StudentCheckIn } from "./CheckIn_Out/CheckIn";
import { StudentCheckOut } from "./CheckIn_Out/CheckOut";
import { getHostelList } from "./HostelList/getHostList";
import { AdminLogin } from "./login/Admin.Login";
import { StudentLogin } from "./login/Student.Login";
import { WardenLogin } from "./login/Warden.login";
import { getPaymentDetails } from "./payments/paymentDetail";
import { AdminProfile, UpdateAdminProfile } from "./profile/AdminProfile";
import { StudentProfile } from "./profile/StudentProfile";
import { WardenProfile } from "./profile/WardenProfile";
import { signupStudent } from "./signup/Student.Signup";
import { createFeedback } from "./student/Feedback";
import { createLeaveApplication } from "./student/leaveApplication";
import { createRoomIssue } from "./student/roomIssue";
import { acceptLeaveApplication, getLeaveApplications } from "./warden/leaveApplication";
import { RoomDetail } from "./warden/RoomDetail";
import { getRoomIssues, resolveRoomIssue } from "./warden/roomIssue";
import { getStudentList } from "./warden/StudenList";
import { StudentAttendence } from "./warden/StudentAttendence";
export const route: Router = Router();

route.get("/allotHostel", AllotHostel);
route.get("/getHostelList", getHostelList);

// signup routes
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
route.patch("/admin/profile", UpdateAdminProfile);
route.get("/student/profile", StudentProfile);

// Student Check In/Out
route.post("/student/checkin/", StudentCheckIn);
route.post("/student/checkout/", StudentCheckOut);

// warden routes
route.get("/warden/studentList", getStudentList);
route.get("/warden/roomDetail", RoomDetail);
route.get("/warden/studentAttendence", StudentAttendence);

route.post("/student/createRoomIssue", createRoomIssue);
route.post("/student/createLeaveApplication", createLeaveApplication);
route.post("/student/Feedback", createFeedback);

route.post("/warden/RoomIssues", getRoomIssues);
route.patch("/warden/RoomIssues", resolveRoomIssue);
route.post("/warden/LeaveApplications", getLeaveApplications);
route.patch("/warden/LeaveApplications", acceptLeaveApplication);

route.get("/admin/viewFeedback", viewFeedback);
route.get("/admin/Dashboard", getDashboard);
route.get("/paymentDetails", getPaymentDetails);