# EventTrackerProject

## Description
- Sleep Tracker is a simple RESTful web application that allows users to log their night sleep patterns. Each user can record when they went to bed, when they woke up, how tired they felt, and any additional notes about their sleep. The application stores this information in a relational database and provides basic CRUD functionality for managing sleep entries.

## Technologies used for Back End
- Java
- Spring Eclipse
- Spring MVC
- Spring JPA
- Sublime
- MAMP
- MySQL
- MySQL Workbench
- Gradle
- Junit

## Technologies used for Front End
- HTML
- CSS
- Bootstrap
- JavaScript


## Concepts applied
- Object Oriented Java Programming
- Object Relational Mapping
- Database Query
- MVC Mapping
- CRUD Operation
- AJAX
- JSON
- DOM

## Lessons learned
- I became more comfortable with handling HTTP Verbs like GET, POST, PUT, and DELETE in a RESTful API context.
- I got a better understanding with CRUD operations and how to map those to HTTP verbs
- I also became more comfortable with HTTP status codes (200 OK, 201 Created, 204 No Content, 400 Bad Request, 404 Not Found) based on different CRUD outcomes.
- Experienced using the XMLHttpRequest in JavaScript to perform CRUD operations.
- Learned to use addEventListener in JavaScript to handle both click and submit events, enabling user interaction without page reload by utilizing preventDefault().


### Endpoints

| HTTP Verb | URI                  | Request Body              | Response Body              | Status               |
|-----------|----------------------|---------------------------|----------------------------|----------------------|
| GET       | /api/sleeplogs       |                           | List of sleeplogs          | 200                  |
| GET       | /api/sleeplogs/17    |                           | Single sleeplog            | 200 or 404           |
| POST      | /api/sleeplogs       | JSON of new sleeplog      | JSON of created sleeplog   | 201 or 400           |
| PUT       | /api/sleeplogs/17    | JSON for updating sleeplog| JSON of updated sleeplog   | 200, 404, or 400     |
| DELETE    | /api/sleeplogs/17    |                           |                            | 204, 404, or 400     |
