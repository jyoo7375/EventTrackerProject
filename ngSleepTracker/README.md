# NgSleepTracker

## Description
- NgSleepTracker is a RESTful web application that enables user to log and manage their sleep patterns. User can record when they went to bed, when they woke up, how tired they felt, and add any additional notes about their sleep. This application stores information in a relational database and provides basic CRUD functionality, with Angular frontend and Spring Boot backend.

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
- Angular
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
- Two-way data binding

## Lessons learned
- I became more comffortable with RESTful API endpoints using HTTP methods in angular.
- Learned to persist and retrieve data using Spring DATA JPA and mapping it to the frontend.
- Learned the importance of binding form input data using [(ngModel)]
- Learned how to use Observables<> in Angular to handle asynchronous data from HTTP requests.
- Got more experience with using .pipe() in Angular to manage data and error handling in HTTP service methods.
- Better understanding of @Injectectable() in Angular for creating and injecting services.

### Endpoints

| HTTP Verb | URI                  | Request Body              | Response Body              | Status               |
|-----------|----------------------|---------------------------|----------------------------|----------------------|
| GET       | /api/sleeplogs       |                           | List of sleeplogs          | 200                  |
| GET       | /api/sleeplogs/17    |                           | Single sleeplog            | 200 or 404           |
| POST      | /api/sleeplogs       | JSON of new sleeplog      | JSON of created sleeplog   | 201 or 400           |
| PUT       | /api/sleeplogs/17    | JSON for updating sleeplog| JSON of updated sleeplog   | 200, 404, or 400     |
| DELETE    | /api/sleeplogs/17    |                           |                            | 204, 404, or 400     |
