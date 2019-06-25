# BackEND for the FoodieFun Application
This is the backend for foodieFun APP

Pitch: As an avid foodie, I love going out to eat.  I hate remembering what I have and haven’t ordered at each place, what I liked and didn’t like, what the wait time was a certain times of day, etc.  Did I like the burrito or enchilada better? The spicy version or normal?

MVP:

 1. An on-boarding process for a user.
2. Ability to easily create and post a menu item review(restaurant name, restaurant type (italian, mexican, fast food, etc.) menu item name, photo of your order, price, food rating (could use 5 star method or other), other comments, your wait time, date of visit). Hitting submit adds item to the homepage.
 3. Ability to easily edit / delete a review. Deleting removes from homepage.
 4. Homepage to see a grid of all your recent menu item reviews.  Can filter by restaurant, price, food type (mexican, italian, dessert, etc.), date visited and your rating.


Stretch: Add a social aspect. You can friend other users, and see what they order frequently or rate the highest at places new and old.

DESIGN LINKS / DATA SETS
Fun free food icons https://www.invisionapp.com/inside-design/design-resources/download-icons-for-free/


# NON-AUTH ENDPOINTS
----------------------------------------------------------------------------------------------------------------------------------

### REGISTER (POST)

Endpoint: https://foodiefun-be.herokuapp.com/api/new/register

Required:
```
{
 username: string,
 password: string
}
```

Result: Thank you message with the username.
```
{
    "message": "Welcome Nguyen26!"
}
```

Comment: Username is unique and cannot be repeated.

----------------------------------------------------------------------------------------------------------------------------------

### LOGIN (POST)

Endpoint: https://foodiefun-be.herokuapp.com/api/new/login

Required:
```
{
 username: string,
 password: string
}
```
Result: Success Message, TOKEN, ID of Current User
```
{
    "message": "Success, have a token!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjozLCJ1c2VybmFtZSI6Ik5ndXllbjIyIiwiaWF0IjoxNTYxNDQyOTQ5LCJleHAiOjE1NjE0NDY1NDl9.B4jNv1pE6M6gP5whBOU-zNzz3D7syPUFoCp1hx1QQ08",
    "id": 3
}
```

Comment: The JSON WEB TOKEN should be stored on local storage and sent as part of the 'Authorization' header (of the req) when making your axios calls. This allows access to restricted endpoints such as personal reviews related to a user. Having a token within local storage will allow access to restricted routes within your REACT application. Token will last for ONE hour before expiring.

----------------------------------------------------------------------------------------------------------------------------------

### GET USERS (GET)

Endpoint: https://foodiefun-be.herokuapp.com/api/new/users

Results: List of all of the users within the Database.
```
[
    {
        "id": 3,
        "username": "Nguyen22",
        "password": "$2a$10$2EozdisK/c8uZYQ1vaUdQ.yhujM9hfrRt4yLaMQZ0xdLFJJP11kS."
    },
    {
        "id": 4,
        "username": "Nguyen26",
        "password": "$2a$10$wrvG/4p0mH26GoxzKnk4bu9iWxkjySlDPXjCygA0tE/I1wzPfTwEq"
    }
]
```

Comment: This endpoint should be used to test your application only. It will be removed once the application is completed.

----------------------------------------------------------------------------------------------------------------------------------

# ALL OF THE ENDPOINTS BELOW REQUIRE A TOKEN TO ACCESS
```
Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo2LCJ1c2VybmFtZSI6IlNreWxlcjYiLCJpYXQiOjE1NjA1Mjk4ODcsImV4cCI6MTU2MDUzMzQ4N30.QdUvi2s13CJ118PjmC-Yv4vCKYNb6VevQdcSgqLZhMo
```

----------------------------------------------------------------------------------------------------------------------------------

### CREATE REVIEW (POST)

Endpoint: https://foodiefun-be.herokuapp.com/api/auth/review

Required:
```
{
 user_id: integer,
 resname: string,
 restype: string,
 foodname: string,
 price: float,
 imgURL: string,
 rating: integer
}
```

Results: Success Message!
```
{
    "message": "Post Successful!"
}
```

Comment: COMMENT is an optional field. User_id is the id of the current user. You can get the id from a successful login. Key must use these exact names. Integers (whole and/or negative) and floats are number values with decimals.

----------------------------------------------------------------------------------------------------------------------------------

### READ REVIEW (GET)

Endpoint: https://foodiefun-be.herokuapp.com/api/auth/review

Results: Array of list of all reviews.
```
[
    {
        "id": 1,
        "user_id": 1,
        "resname": "The Big Cheesy",
        "restype": "american",
        "foodname": "cheese sandwich",
        "price": 3.25,
        "rating": 5,
        "comment": "Comments are Here!"
    },
    {
        "id": 2,
        "user_id": 1,
        "resname": "Olive What???",
        "restype": "Italian???",
        "foodname": "Cheetos",
        "price": 12.25,
        "rating": 3,
        "comment": "This is a comment that is optional! UPDATEDDDDD"
    },
    {
        "id": 3,
        "user_id": 3,
        "resname": "Olive What",
        "restype": "Italian",
        "foodname": "Cheetos",
        "price": 10.25,
        "rating": 5,
        "comment": "This is a comment that is optional"
    },
]
```

Comment: Will only be useful within development for developer testing. Will be removed when application is completed.

----------------------------------------------------------------------------------------------------------------------------------

### READ REVIEW BY ID (GET)

Endpoint: https://foodiefun-be.herokuapp.com/api/auth/review/:id

Results: One review with a particular unique ID (1)
```
{
    "id": 1,
    "user_id": 1,
    "resname": "The Big Cheesy",
    "restype": "american",
    "foodname": "cheese sandwich",
    "price": 3.25,
    "rating": 5,
    "comment": "Comments are Here!"
}
```

Comment: ID is the unique ID of the review. It is NOT the user_id.

----------------------------------------------------------------------------------------------------------------------------------

### READ ALL REVIEW(S) BY USER_ID (GET)

Endpoint: https://foodiefun-be.herokuapp.com/api/auth/review/user/:id

Results: All reviews of a particular user_id (1)
```
[
    {
        "id": 1,
        "user_id": 1,
        "resname": "The Big Cheesy",
        "restype": "american",
        "foodname": "cheese sandwich",
        "price": 3.25,
        "rating": 5,
        "comment": "Comments are Here!"
    },
    {
        "id": 2,
        "user_id": 1,
        "resname": "Olive What???",
        "restype": "Italian???",
        "foodname": "Cheetos",
        "price": 12.25,
        "rating": 3,
        "comment": "This is a comment that is optional! UPDATEDDDDD"
    }
]
```

Comment: ID is the user_id of a current user in the database.

----------------------------------------------------------------------------------------------------------------------------------

### UPDATE REVIEW BY ID (PUT)

Endpoint: https://foodiefun-be.herokuapp.com/api/auth/review/:id

Required:
```
{
 user_id: integer,
 resname: string,
 restype: string,
 foodname: string,
 price: float,
 imgURL: string,
 rating: integer
}
```

Results: Success Message and the updated object.
```
{
    "review": {
        "id": 2,
        "user_id": 1,
        "resname": "Olive What",
        "restype": "Never heard of it",
        "foodname": "trash",
        "price": 7.15,
        "imgURL": "http://somerandomurlhere",
        "rating": 2,
        "comment": "FINAL UPDATEEE"
    }
}
```

Comment: COMMENT is an optional field. ID is the unique ID of the review.

----------------------------------------------------------------------------------------------------------------------------------

### DELETE REVIEW BY ID (DELETE)

Endpoint: https://foodiefun-be.herokuapp.com/api/auth/review/:id

Results: Success Message of Destruction Imminent.
```
{
    "message": "Destruction Imminent."
}
```

Comment: ID is the unique ID of the review.

----------------------------------------------------------------------------------------------------------------------------------




