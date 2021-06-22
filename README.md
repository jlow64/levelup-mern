# mission6-mern-docker
MERN stack utilising docker containers 

Setup:

npm or yarn install in the client and server folder.

Then, in the root folder to create the base images use:
  - docker build -t "react-client" ./client/
  - docker build -t "api-server" ./server/
  
You can also use docker-compose build

To run, use docker-compose up

To access the mongodb container, use docker exec -it "container name/id" bash


