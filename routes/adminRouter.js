import express from "express";
import {createAdmin} from "../controllers/AdminController.js";
import {getAllAdmins} from "../controllers/AdminController.js";
import {updateAdmin} from "../controllers/AdminController.js";
import {deleteAdmin}  from "../controllers/AdminController.js";

const AdminRouter = express.Router();

AdminRouter.get("/", getAllAdmins);
AdminRouter.post("/", createAdmin);
AdminRouter.put("/:id", updateAdmin);
AdminRouter.delete("/:id", deleteAdmin);

export default AdminRouter