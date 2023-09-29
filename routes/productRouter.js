import express from "express";
import { createProduct, getAllProducts} from "../controllers/ProductController.js";
//import { createProduct} from "../controllers/ProductController.js";

const productRouter = express.Router();

productRouter.get("/", getAllProducts);

productRouter.post("/", createProduct);


export default productRouter