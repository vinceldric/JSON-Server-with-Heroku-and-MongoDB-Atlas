# CPNT262-A Web Client & Server Prog.
## [Assignment 5](https://github.com/sait-wbdv/assessments/tree/master/cpnt262/assignment-5) : JSON Server with Heroku and MongoDB Atlas

by **Vincent Miranda**

GitHub [Repo](https://github.com/vinceldric/cpnt262-a5)

Heroku App [Link](https://vincent-cpnt262-a5.herokuapp.com/)

#### GET Endpoints
- returns array of objects : [api/v0/places](https://vincent-cpnt262-a5.herokuapp.com/api/v0/places)
- returns an object for the specified ID(1-15) : [api/v0/places/1](https://vincent-cpnt262-a5.herokuapp.com/api/v0/places/1)
- if ID entered is not from 1 to 15, will return : ID you've entered does not exist! ex. [api/v0/places/16](https://vincent-cpnt262-a5.herokuapp.com/api/v0/places/16)


#### Assets
- the details I've used in the array of objects still came from [unsplash](https://unsplash.com/) and [Lorem Picsum](https://picsum.photos/).

#### Short Summary
I've reused my [assignment 4](https://github.com/vinceldric/cpnt262-a4) files and added a new module which is the `mongoose`. This module let us communicate and connect with MongoDB Atlas so that our files in the model folder can be stored on the database. This is deployed to a live Heroku App server.