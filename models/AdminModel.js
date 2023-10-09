import db from '../database/db.js';
import { DataTypes } from 'sequelize';

const AdminModel = db.define("admins", {
    user_name:{type:DataTypes.STRING}, 
    user_email:{type:DataTypes.STRING}, 
    user_password:{type:DataTypes.STRING}, 
},{
    timestamps: false
})

export default AdminModel;

