SET NAMES utf8;

CREATE DATABASE IF NOT EXISTS instagram;
SET character_set_client = utf8mb4;

CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userId` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstName` varchar(50) DEFAULT NULL,
  `lastName` varchar(50) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `registerDate` datetime DEFAULT NULL,
  `loginDate` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `feed` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`userId` int(11) NOT NULL,
	`userName` varchar(20) NOT NULL,
	`title` varchar(100) NOT NULL,
	`content` TEXT NOT NULL,
	`uploadImages` JSON,
	`registerDate` datetime NOT NULL,
	`updateDate` datetime DEFAULT NULL,
	`like` int(11),
	PRIMARY KEY (`id`)
);
