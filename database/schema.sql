CREATE DATABASE local_products;

USE local_products;

CREATE TABLE admins (
    id int AUTO_INCREMENT PRIMARY KEY,
    user_name varchar(50) UNIQUE NOT NULL,
    user_email varchar(50) UNIQUE NOT NULL,
    user_password varchar(50) NOT NULL
);

CREATE TABLE products(
    id int AUTO_INCREMENT PRIMARY KEY,
    product_name varchar [unique, not null]
    brands_id integer
    product_description varchar(500) NOT NULL [note: 'design description']
    category varchar
    price integer [not null]
    times_sold integer
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP );

CREATE TABLE brands (
    id integer AUTO_INCREMENT PRIMARY KEY,
    products varchar(500) NOT NULL,
    categories varchar(500) NOT NULL
);


