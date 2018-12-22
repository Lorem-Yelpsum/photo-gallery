DROP DATABASE IF EXISTS photo_gallery;

CREATE DATABASE photo_gallery;

USE photo_gallery;

CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    user VARCHAR(25) NOT NULL,
    elite TINYINT NOT NULL,
    friends INT NOT NULL,
    reviews INT NOT NULL
);

CREATE TABLE pictures(
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    user_id INT NOT NULL,
    restaurant_id INT NOT NULL,
    rating INT NULL,
    comments VARCHAR(55) NOT NULL,
    day VARCHAR(20) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

