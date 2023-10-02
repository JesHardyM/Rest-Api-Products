import db from '../database/db.js';
import { DataTypes } from 'sequelize';


const BrandModel = db.define("brands", {
    brand_name:{type:DataTypes.STRING}, 
    products:{type:DataTypes.STRING}, 
    category:{type:DataTypes.TEXT},
},{
    timestamps: false
})

export default BrandModel;