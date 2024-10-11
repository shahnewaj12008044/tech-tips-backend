# Tech Tips Hub Backend 

## Live link: 


## Key Features

- Authentication: The application is secured by JWT authentication method;
- Authorization: Only authorized person can access the protected resources;
- Payment-System: User can pay for the premium content;



### Endpoints:

1. Sign Up: (POST) /api/auth/register;
2. Sign In: (POST) /api/auth/login;
3. Forget Password: (POST) /api/auth/forget-password; 
4. Reset Password: (POST) /api/auth/reset-password;
5. Post: (POST) /api/post,
   a. (GET) /api/post,
   b.(GET) /api/post/:id,
   c. (PUT) /api/post/:id,
   c. (DELETE) /api/post/:id,
   e. (GET) /api/users/my-post/:email  ,
   f. (POST) /api/:post/upvote,
   g.(POST) /api/:post/downvote;
6. Comment: (POST) /api/comment, (PUT) /api/comment/:id, (DELETE) /api/comment/:id;
7. Payment: (POST) /api/initiate-payment, (POST) /api/confirmation;
8. User: (GET) /api/users/:email, (PUT) /api/users/:email, (POST) /api/users/follow, (POST) /api/users/unfollow;
9. Notification: (GET) /api/notification/:userId, (DELETE) /api/notification/:userId/:postId;
10. Anaylatics: 


# How to run the application locally

1. Clone the repository

```
https://github.com/shahnewaj12008044/tech-tips-backend.git
```

2. Project open

```
cd tech-tips-backend
```

3. install the required packages

```
npm i
```

4. Add a .env file

```
NODE_ENV=development
PORT=5000
DATABASE_URL=
JWT_ACCESS_SECRET=
JWT_ACCESS_SECRET_EXPIRE=
BCRYPT_SALT_ROUND=
RESET_PASS_UI_LINK=
EMAIL_USER=
EMAIL_PASS=
STORE_ID=
SIGNATURE_KEY=
PAYMENT_URL=
PAYMENT_VERIFY_URL=
```

5. Run the Application locally

```
npm run start:dev
```
