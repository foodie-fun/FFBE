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

REGISTER (POST)

Endpoint: https://foodiefun-be.herokuapp.com/api/new/register

Required:
```
{
 username: string,
 password: string
}
```

Result: Thank you message with the username.

Comment: Username is unique and cannot be repeated.

----------------------------------------------------------------------------------------------------------------------------------

LOGIN (POST)

Endpoint: https://foodiefun-be.herokuapp.com/api/new/login

Required:
```
{
 username: string,
 password: string
}
```
Result: Success Message, TOKEN

Comment: The JSON WEB TOKEN should be stored on local storage and sent as part of the 'Authorization' header (of the req) when making your axios calls. This allows access to restricted endpoints such as personal reviews related to a user. Having a token within local storage will allow access to restricted routes within your REACT application. Token will last for ONE hour before expiring.

----------------------------------------------------------------------------------------------------------------------------------

GET USERS (GET)

Endpoint: https://foodiefun-be.herokuapp.com/api/new/users

Results: List of all of the users within the Database.

Comment: This endpoint should be used to test your application only. It will be removed once the application is completed.

----------------------------------------------------------------------------------------------------------------------------------

# ALL OF THE ENDPOINTS BELOW REQUIRE A TOKEN TO ACCESS

----------------------------------------------------------------------------------------------------------------------------------

CREATE REVIEW (POST)

Endpoint: https://foodiefun-be.herokuapp.com/api/auth/review

Required:
```
{
 user_id: integer,
 resname: string,
 restype: string,
 foodname: string,
 price: float,
 rating: integer
}
```

Results: Success Message!

Comment: COMMENT is an optional field. User_id is the id of the current user. You can get the id from a successful login. Key must use these exact names. Integers (whole and/or negative) and floats are number values with decimals.

----------------------------------------------------------------------------------------------------------------------------------

READ REVIEW (GET)

Endpoint: https://foodiefun-be.herokuapp.com/api/auth/review

Results: Array of list of all reviews.

Comment: Will only be useful within development for developer testing. Will be removed when application is completed.

----------------------------------------------------------------------------------------------------------------------------------

READ REVIEW BY ID (GET)

Endpoint: https://foodiefun-be.herokuapp.com/api/auth/review/:id

Results: One review with a particular unique ID

Comment: ID is the unique ID of the review. It is NOT the user_id.

----------------------------------------------------------------------------------------------------------------------------------

READ ALL REVIEW(S) BY USER_ID (GET)

Endpoint: https://foodiefun-be.herokuapp.com/api/auth/review/user/:id

Results: All reviews of a particular user_id

Comment: ID is the user_id of a current user in the database.

----------------------------------------------------------------------------------------------------------------------------------

UPDATE REVIEW BY ID (PUT)

Endpoint: https://foodiefun-be.herokuapp.com/api/auth/review/:id

Required:
```
{
 user_id: integer,
 resname: string,
 restype: string,
 foodname: string,
 price: float,
 rating: integer
}
```

Results: Success Message and the updated object.

Comment: COMMENT is an optional field. 

----------------------------------------------------------------------------------------------------------------------------------

UPDATE REVIEW BY ID (DELETE)

Endpoint: https://foodiefun-be.herokuapp.com/api/auth/review/:id

Results: Success Message of Destruction Imminent.

Comment: ID is the unique ID of the review.

----------------------------------------------------------------------------------------------------------------------------------




