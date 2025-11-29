import express from "express";
import {
  addNewAdmin,
  addNewDoctor,
  getAllDoctors,
  getAllUserDetails,
  login,
  logoutAdmin,
  logoutPatient,
  patientRegister,
} from "../controller/userController.js";
import { isAdminAuthenticated } from "../middlewares/Auth.js";
import { isPatientAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/patient/register", patientRegister);
router.post("/login", login);
router.post("/admin/addnew", isAdminAuthenticated, addNewAdmin);
router.get("/doctors", getAllDoctors);
router.get("/admin/me", isAdminAuthenticated, getAllUserDetails);
router.get("/patient/me", isPatientAuthenticated, getAllUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);
router.post("/doctor/addnew", isAdminAuthenticated, addNewDoctor);

export default router;
