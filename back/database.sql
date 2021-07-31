DROP DATABASE IF EXISTS Groupomania;
CREATE DATABASE Groupomania;
USE Groupomania;

DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(255),
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    bio VARCHAR(255),
    imgprofile VARBINARY(255),
    isAdmin TINYINT(1)
) ENGINE = InnoDB;

DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
    id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    idUSERS INT,
    content VARCHAR(255),
    attachment VARCHAR(255),
    likes INT
) ENGINE = InnoDB;

DROP TABLE IF EXISTS Messages;
CREATE TABLE Messages (
   id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
   idMESSAGES INT,
   idUSERS INT,
   content VARCHAR(255),
   likes INT
) ENGINE = InnoDB;