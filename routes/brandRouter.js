import express from "express";
import { getAllBrands , createBrand , updateBrand , deleteBrand } from "../controllers/BrandController.js";

const brandRouter = express.Router();

brandRouter.get("/", getAllBrands);
brandRouter.post("/", createBrand);
brandRouter.put("/:id", updateBrand);
brandRouter.delete("/:id", deleteBrand);

export default brandRouter