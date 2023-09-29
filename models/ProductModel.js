import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const ProductModel = db.define("products", {
    product_name:{type:DataTypes.STRING}, 
    brands_id:{type:DataTypes.STRING}, 
    product_description:{type:DataTypes.STRING}, //schema varchar
    category:{type:DataTypes.STRING},
    price :{type:DataTypes.INTEGER},
},{
    timestamps: false
})

export default ProductModel;

