import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const OrderModel = db.define("orders", {
    customer:{type:DataTypes.STRING}, //FK user name
    products:{type:DataTypes.STRING}, //FK product name
    quantity:{type:DataTypes.INTEGER}, 
    price:{type:DataTypes.FLOAT}, 
    order_status:{type:DataTypes.STRING},
},{
    timestamps: false
})

export default OrderModel;

