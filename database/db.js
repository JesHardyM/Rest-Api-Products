import {Sequelize} from "sequelize";

const db = new Sequelize ('local_products', 'root', 'YOUR_PASSWORD', {
    host: 'localhost',
    dialect:'mysql'
});

export default db
