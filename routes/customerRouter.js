import express from "express";
import { createCustomer } from "../controllers/CustomerController.js";
import {getAllCustomers} from "../controllers/CustomerController.js";
import { updateCustomer } from "../controllers/CustomerController.js";
import { deleteCustomer }  from "../controllers/CustomerController.js";

const customerRouter = express.Router();

customerRouter.get("/", getAllCustomers);
customerRouter.post("/", createCustomer);
customerRouter.put("/:id", updateCustomer);
customerRouter.delete("/:id", deleteCustomer);

export default customerRouter