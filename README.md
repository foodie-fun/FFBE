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

----------------------------------------------------------------------------------------------------------------------------------

REGISTER

Endpoint: https://foodiefun-be.herokuapp.com/api/new/register

Required:

{
 username: string,
 password: string
}

Result: Thank you message with the username.

Comment: Username is unique and cannot be repeated.

----------------------------------------------------------------------------------------------------------------------------------

LOGIN

Endpoint: https://foodiefun-be.herokuapp.com/api/new/login

Required:

{
 username: string,
 password: string
}

Result: Success Message, TOKEN

Comment: The JSON WEB TOKEN should be stored on local storage and sent as part of the 'Authorization' header (of the req) when making your axios calls. This allows access to restricted endpoints such as personal reviews related to a user.

----------------------------------------------------------------------------------------------------------------------------------
