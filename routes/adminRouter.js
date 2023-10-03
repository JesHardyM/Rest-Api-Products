import express from "express";
import {createAdmin} from "../controllers/AdminController.js";
import {getAllAdmins} from "../controllers/AdminController.js";
import {updateAdmin} from "../controllers/AdminController.js";
import {deleteAdmin}  from "../controllers/AdminController.js";

const adminRouter = express.Router();

adminRouter.get("/", getAllAdmins);
adminRouter.post("/", createAdmin);
adminRouter.put("/:id", updateAdmin);
adminRouter.delete("/:id", deleteAdmin);

export default adminRouter