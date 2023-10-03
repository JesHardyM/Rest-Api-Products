CREATE DATABASE local_products;

USE local_products;

CREATE TABLE brands (
    id integer AUTO_INCREMENT PRIMARY KEY,
    brand_name varchar(50) UNIQUE NOT NULL,
    products varchar(500) NOT NULL,
    categories varchar(500) NOT NULL);

select * from brands;
insert into brands(brand_name, products, categories)
VALUES ("monstera de castillo", "monsteras", "verdes de hoja grande"),
	    ("i will bite you", "venus fly traps, pitcher plants, cobra lilly, butterwort, monkey cup, australian sundew, cape sundew, spoon leaf sundew, floating bladderwort, potting soil, fertilizer, bark, peat, substrate, terrariums","carnivorous plants, exotic plants, rare species, aquatic carnivorous plants"),
        ("urban jungle", "monsteras, pothos, helechos, plantain, carnivorous plants, living walls, bonsai","living walls, interior design, climbing plants, large leaf plants, carnivorous plants, moss, stone"),
        ("pothos off the wall","pothos, helechos, climbing plants, living walls, climbing poles, climbing structures, irrigation equipment","living walls, interior design, climbing plants, irrigation, climbing structures, suspension structures "),
        ("aquatic culture","pothos, helechos, aquatic plants, aquariums, plant support structures, fish, snails, aquatic mascots, water modifers","aquarium walls, interior design, aquatic plants, plant support structures, aquaculture, mascotas "),


CREATE TABLE products (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50) UNIQUE NOT NULL,
    brand_id INTEGER,
    product_description VARCHAR(500) NOT NULL,
    category VARCHAR(50),
    price FLOAT NOT NULL,
    createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE `products` ADD FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE;

select * from products;
insert into products(product_name, brand_id, product_description, category, price)
VALUES ("venus fly trap", 1, "a low growing carnivorous plant native to the coastal carolina area", "carnivorous", 15),
	("climbing net", 4, "a netted structure to train your pothos or other climbing plant to crisscross walls or create a canopy on the cieling", "climbing structure", 40),
    ("monstera adasoni", 1, "a climbing full foliage plant", "climbing", 35),
    ("minature pitcher plant",1,"small carnivorous plants lures and traps insects inside of their pitcher like structures", "carnivorous",10),
    ("venus fly trap", 3, "native to the coastal carolinas, this low growing fly catcher is an easy keeper preferring sandy soil, medium high humidity, and a few flies","carnivorous", 15);
    ("australian sundew", 2 , "native to australia, this carnivorous plant goes dormant in summer inorder to survive the harsh australian summers", "carnivorous, rare", 25)

CREATE TABLE admins (
    id int AUTO_INCREMENT PRIMARY KEY,
    user_name varchar(50) UNIQUE NOT NULL,
    user_email varchar(50) UNIQUE NOT NULL,
    user_password varchar(50) NOT NULL,
    roles varchar (100) NOT NULL);

select * from admins;
INSERT into admins(user_name, user_email, user_password , roles)
VALUES ("green_giants", "monsteras@mail.com", "greenGiants" , "stock manager"),
	("manager", "monsteraManagement@gmail.com", "gotyaplants2" , "store manager");

CREATE TABLE customers (
    id int AUTO_INCREMENT PRIMARY KEY,
    user_name varchar(50) UNIQUE NOT NULL,
    user_email varchar(50) UNIQUE NOT NULL,
    user_password varchar(50) NOT NULL,
    address varchar(500) NOT NULL);

select * from customers;
INSERT into customers(user_name, user_email, user_password, address)
VALUES ("joBob", "iNeedPlants@mail.com", "goblidygoo", "111 GreenValley Ave"),
	    ("janesPalace", "janesPalace@gmail.com", "myGreenTemple", "234 AguaVida" ),
        ("jeremiah bullfrog" , "anicefriendofmine@mail.com)", "drinkmywine", "123 Lakeside Marsh");

CREATE TABLE orders(
	id	integer AUTO_INCREMENT PRIMARY KEY,
	customer	varchar(50) NOT NULL,
	products	varchar(500) NOT NULL,
	quantity	integer NOT NULL,
	price	FLOAT NOT NULL,
    order_status varchar(50) NOT NULL,
	createAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updateAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP);
    
    ALTER TABLE `orders` ADD FOREIGN KEY (`products`) REFERENCES `products` (`product_name`),
	ADD FOREIGN KEY (`customer`) REFERENCES `customers` (`user_name`) ON DELETE SET NULL;
    
select * from orders;
INSERT into orders(customer, products, quantity, price, order_status)
VALUES("joBob", "venus fly trap", 2 , 30 , "processing"),
	("janesPalace", "venus fly trap, monstera adasoni", 2 , 50, "shipped"),
    ("jeremiah bullfrog", "austrailian sundew", 1, 25 , "ready for shipping");