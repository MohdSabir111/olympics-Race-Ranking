# olympics-Race-Ranking


###  GET Routes
`API Endpoints`
- visit http://localhost:3000


| Methods     | Urls                 |Description            |
| ----------- | -----------          | -----------            |
| GET         | api/Athlete        |Get all Athlete       |
| GET         | api/Athlete/id     |Get a specific Athlete             |
| POST        | api/Athlete        |Create a new Athlete    |
| PUT         | api/Athlete/id    |Update an existing Athlete|
| DELETE      | api/Athlete/id    |Delete an existing Athlete|





#### Postman

- Install [Postman](https://www.getpostman.com/apps) to interact with REST API
- Create a message with:
  - URL: http://localhost:3000/Athlete
  - Method: POST
  - Body: raw + JSON (application/json)</br>
 
   Body Content: </br>
   {
     ranking:1
     name:"husain bolt"
    dob:1998-01-13
     country:"usa"
       score:2323
     event:"100 meter"
     }
     </br>
- Delete a message with:
  - URL: http://localhost:3000/Athlete/1
  - Method:
