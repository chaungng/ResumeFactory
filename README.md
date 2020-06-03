
# Resume Factory

Resume Factory is a web-based resume management system for job seekers

# Setup project

### Requirements:
  - [Docker](https://www.docker.com/products/docker-desktop)
  - Our repository in your local machine
  - Your favorite IDE

### Instructions:
1. Download and instrall docker on your machine
   
- Verify that you have docker install

```sh    
$ docker --version
```

- You should see something like:
```sh
Docker version 19.03.8, build afacb8b
```

- For Chau, you probably use Linux for development, you will need to install [docker-compose](https://docs.docker.com/compose/install/) seperately

2. Run docker
- Inside root directory, run:

```sh
docker-compose up -d
```

- flag -d means run docker in the background
- This will run a MySQL db and a Mongo db
- Now you can run the Spring Boot Server

- To discover public rest api

```sh
curl http://localhost:8080
```


3. After development, you can stop docker by running:

```sh
docker-compose down
```

- Spring Boot Server and React server will be added to docker in the near future


