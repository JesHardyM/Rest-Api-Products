import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const CustomerModel = db.define("customers", {
    user_name:{type:DataTypes.STRING}, 
    user_email:{type:DataTypes.STRING}, 
    user_password:{type:DataTypes.STRING}, 
    address:{type:DataTypes.STRING}, 
},{
    timestamps: false
})

export default CustomerModel;
