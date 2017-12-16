-- Drops the beersdb if it exists currently --
DROP DATABASE IF EXISTS beers;

-- Creates the "beersdb" database--
CREATE DATABASE beersdb;
use beersdb;


CREATE TABLE beers(
	id int NOT NULL AUTO_INCREMENT,
	beer_name varchar(255) NOT NULL,
	brewery varchar(255) NOT NULL,
	ibu varchar(255) NOT NULL,
	PRIMARY KEY (id)
	);
