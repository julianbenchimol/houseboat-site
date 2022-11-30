CREATE DATABASE houseboat_models;

USE houseboat_models;

CREATE TABLE models(
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    price DECIMAL(8,2) NOT NULL,
    length INT NOT NULL,
    width INT NOT NULL,
    height INT NOT NULL,
    heightWater INT NOT NULL,
    draft INT NOT NULL
)