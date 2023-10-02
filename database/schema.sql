CREATE DATABASE local_products;

USE local_products;

CREATE TABLE brands (
    id integer AUTO_INCREMENT PRIMARY KEY,
    brand_name varchar(50) NOT NULL,
    products varchar(500) NOT NULL,
    categories varchar(500) NOT NULL,
);

INSERT into brands(brand_name, products, categories)
VALUES ("green giants", "monsteras", "tropical plants")

CREATE TABLE products(
    id integer AUTO_INCREMENT PRIMARY KEY,
    product_name varchar(50) UNIQUE NOT NULL,
    brand_id INTEGER NOT NULL,
    product_description varchar(500) NOT NULL,
    category varchar(50),
    price INTEGER NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP );

ALTER TABLE `products` ADD FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`);

INSERT into products(product_name, brand_id, product_description, category, price,);
VALUES ("monstera adasoni", "1", "a climbing full foliage plant", "climbing", "35")

CREATE TABLE admins (
    id int AUTO_INCREMENT PRIMARY KEY,
    user_name varchar(50) UNIQUE NOT NULL,
    user_email varchar(50) UNIQUE NOT NULL,
    user_password varchar(50) NOT NULL
);

INSERT into admins(user_name, user_email, user_password)
VALUES ("green_giants", "monsteras@mail.com", "greenGiants")


