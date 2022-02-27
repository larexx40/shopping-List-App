DROP DATABASE IF EXISTS shoppinglist;
CREATE DATABASE shoppinglist CHARACTER SET utf8 COLLATE utf8_general_ci;
USE shoppinglist;
CREATE TABLE items(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(20),
    quantity varchar(30),
    price int(4),
    PRIMARY KEY (id)
);
INSERT INTO items(id,name,quantity,price) VALUES (1,'potatoes','7 packs',2000);
INSERT INTO items(id,name,quantity,price) VALUES (2,'carrots','10',700);
INSERT INTO items(id,name,quantity,price) VALUES (3,'onions','10',200);
INSERT INTO items(id,name,quantity,price) VALUES (4,'plantain','2 bunch',7000);
INSERT INTO items(id,name,quantity,price) VALUES (5,'maggi','4 packs',200);
INSERT INTO items(id,name,quantity,price) VALUES (6,'oil','2 gallons',1700);