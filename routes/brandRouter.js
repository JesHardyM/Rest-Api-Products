import express from "express";
import { createBrand } from "../controllers/BrandController.js";


const brandRouter = express.Router();

productRouter.get("/", getAllBrands);

productRouter.post("/", createBrand);

productRouter.put("/:id", updateBrand);

productRouter.delete("/:id", deleteBrandt);

export default brandRouter