import express from "express";
import {createProduct} from "../controllers/ProductController.js";
import {getAllProducts} from "../controllers/ProductController.js";
import {updateProduct} from "../controllers/ProductController.js";
import {deleteProduct}  from "../controllers/ProductController.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);

export default productRouter