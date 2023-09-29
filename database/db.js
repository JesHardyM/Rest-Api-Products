import {Sequelize} from "sequelize";

const db = new Sequelize ('local_products', 'root', 'ODC1', {
    host: 'localhost',
    dialect:'mysql'
});

export default db