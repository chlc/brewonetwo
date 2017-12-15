-- Run this AFTER Sequelize has created ChicagoBeers table

SELECT * FROM beer_db.ChicagoBeers;

USE beer_db;
INSERT INTO ChicagoBeers (beer,brewery,srmID, createdAt, updatedAt) VALUES ('Coors Light','Coors Brewing Company', 50, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO ChicagoBeers (beer,brewery,srmID, createdAt, updatedAt) VALUES ('Miller Light','Miller Brewing Company', 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
INSERT INTO ChicagoBeers (beer,brewery,srmID, createdAt, updatedAt) VALUES ('Bud Light','Budweiser Brewing Company', 25, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
