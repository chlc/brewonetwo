-- Drops the popbeer if it exists currently --
DROP DATABASE IF EXISTS popbeer;

-- Creates the "popbeer" database--
CREATE DATABASE popbeer;
use popbeer;


CREATE TABLE beers(
	id int NOT NULL AUTO_INCREMENT,
	beer_name varchar(255) NOT NULL,
	brewery varchar(255) NOT NULL,
	beer_neighborhood varchar(255) NOT NULL,
	popular BOOL DEFAULT true,
	PRIMARY KEY (id)
	);
