# brewonetwo
***
###A web app that recommends a local beer/brewery (Chicago) based on a beer the user likes.
###<https://brew-one-two.herokuapp.com/>
***

This project is built using Node, Express, Sequelize, Handlebars, jQuery, Bootstrap, mySQL (local)/JAWSDB(heroku).

Refer to package.json for list of dependencies

This application also uses the Brewery DB API. You will need to request an api key in order to replicate this project.

***
This project is open-source, and the repository can be found at: <https://github.com/brewonetwo/brewonetwo>  

If you use our application as a starting point for something cool, please give us a mention!

If you would like to get in touch with the authors (change requests, questions, bugs and/or features, etc.), please refer to the following contact information:  

Chelsea Nwankpa 
<https://github.com/chlc>  

Juliette Rapala
<https://github.com/jrapala>  

Peter Lee
<https://github.com/plee1467>  

William Alt
<https://github.com/wla312>  
***

To replicate this project locally on your machine:  
1. pull/clone the master branch of our repository. navigate to your corresponding local directory.  
2. ensure all of your node dependencies are installed... 'npm install' (you must have node.js for this to work).  
3. create a local db using mysql workbench or similar mysql database dev environment/tool (refer to 'development' in config.json file for db name). Do NOT create tables. Sequelize will create them for you in the next step.
4. type 'node server.js' in terminal (or ??? in windows) and hit enter. if successful, running server.js in node will create two tables; ChicagoBeers and UserResponses5.  
5. open mysql workbench or similar mysql database dev environment/tool to confirm that two tables were created in the db.  
6. if they were not, refer back to the config.json file and ensure the development db is correct, password, and user information is correct, and you've created a local instance for the db connection.  
7. once the two tables have been created (by sequelize), open the seeds.sql file using mysql workbench or similar mysql database dev environment/tool to add data to the table. NOTE: our table is of chicago beers and breweries, yours does not have to be. just follow the same column structure.  
8. Once the db has been seeded, sign up to brewery DB as a developer to get an api key. insert your brewery DB api key into the beers_controller.js file at/near line 20... var authKey = ""  
9. That's it!

***
Known Limitations:  
1. Recommendations are restricted to the Chicago beers database, so we are only recommending Chicago beers/breweries. If someone wanted to build this applicatoin for another city, they'd have to manually create a "your_city_name" database and populate it. 
2. For now, recommendations are based on IBU only.


