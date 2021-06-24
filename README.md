# mission6-mern-docker
MERN stack utilising docker containers 

Setup:

npm or yarn install in the client and server folder.

Then, in the root folder to create the base images use:
  - docker build -t "react-client" ./client/
  - docker build -t "api-server" ./server/
  
You can also use docker-compose build

To run, use docker-compose up

To access the mongodb container database, use 
then to create an example db that the model can use:

docker exec -it "container name/id" bash
mongo
use merndb
db.createCollection("users")
db.users.insertMany(
[{
  "_id": ObjectId("5fd21021d230812954b4b49a"),
  "firstName": "Manish",
  "lastName": "Mandal",
  "phoneNumber" : "02216747586",
  "schoolName": "MissionReadyHQ",
  "email": "admin@gmail.com",
  "password": "asdfg123",
  "parentName": "Joanne",
  "parentPhoneNumber": "02102354327",
  "parentEmail": "parent1@gmail.com",
  "interestedCourse": "cloud computing",
  "preferredStartDate": "20/04/2022",
  "referalSource": "online"
},{
  "_id": ObjectId("5fd21f60d230812954b4b49b"),
  "firstName": "John",
  "lastName": "Doe",
  "phoneNumber": "02214485573",
  "schoolName": "MissionReadyHQ", 
  "email": "johndoe@gmail.com",
  "password": "asdfg123",
  "parentName": "Bob",
  "parentPhoneNumber": "02136475739",
  "parentEmail": "parent2@gmail.com",
  "interestedCourse": "cloud computing",
  "preferredStartDate": "20/04/2022",
  "referalSource": "news"
},{
  "_id": ObjectId("5fd21f82d230812954b4b49c"),
  "firstName": "Demo",
  "lastName": "test",
  "phoneNumber": "02257689475",
  "schoolName": "MissionReadyHQ",
  "email": "demo@gmail.com",
  "password": "asdfg123",
  "parentName": "Demotester",
  "parentPhoneNumber": "02136475739",
  "parentEmail": "testdemo@gmail.com",
  "interestedCourse": "demo",
  "preferredStartDate": "20/04/2022",
  "referalSource": "online"
}])




