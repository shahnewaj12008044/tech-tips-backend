# Tech Tips Hub Backend 

## Live link: 


## Key Features

- Authentication: The application is secured by JWT authentication method;
- Authorization: Only authorized person can access the protected resources;
- Payment-System: User can pay for the premium content;



## API Endpoints

### 1. Authentication
   - a. **Sign Up**: `(POST) /api/auth/register`
   - b. **Sign In**: `(POST) /api/auth/login`
   - c. **Forget Password**: `(POST) /api/auth/forget-password`
   - d. **Reset Password**: `(POST) /api/auth/reset-password`

### 2. Post
   - a. **Create Post**: `(POST) /api/post`
   - b. **Get All Posts**: `(GET) /api/post`
   - c. **Get Post by ID**: `(GET) /api/post/:id`
   - d. **Update Post by ID**: `(PUT) /api/post/:id`
   - e. **Delete Post by ID**: `(DELETE) /api/post/:id`
   - f. **Get User's Posts**: `(GET) /api/users/my-post/:email`
   - g. **Upvote Post**: `(POST) /api/:post/upvote`
   - h. **Downvote Post**: `(POST) /api/:post/downvote`

### 3. Comment
   - a. **Create Comment**: `(POST) /api/comment`
   - b. **Update Comment**: `(PUT) /api/comment/:id`
   - c. **Delete Comment**: `(DELETE) /api/comment/:id`

### 4. Payment
   - a. **Initiate Payment**: `(POST) /api/initiate-payment`
   - b. **Confirm Payment**: `(POST) /api/confirmation`

### 5. User
   - a. **Get User by Email**: `(GET) /api/users/:email`
   - b. **Update User by Email**: `(PUT) /api/users/:email`
   - c. **Follow User**: `(POST) /api/users/follow`
   - d. **Unfollow User**: `(POST) /api/users/unfollow`

### 6. Notification
   - a. **Get Notifications by User ID**: `(GET) /api/notification/:userId`
   - b. **Delete Notification by User ID and Post ID**: `(DELETE) /api/notification/:userId/:postId`
### 7. Analytics
   - a. **Get Daily Post Analytics by User ID**: `(GET) /api/analytics/daily/:userId`
   - b. **Get Weekly Post Analytics by User ID**: `(GET) /api/analytics/weekly/:userId`
   - c. **Get Monthly Post Analytics by User ID**: `(GET) /api/analytics/monthly/:userId`
   - d. **Get Admin Analytics**: `(GET) /api/analytics/`
   - e. **Get All Post Analytics**: `(GET) /api/analytics/posts`
   - f. **Get All Payment Analytics**: `(GET) /api/analytics/payment`
### 8. Activity Logs
   - a. **Get All Activity Logs**: `(GET) /api/activity-logs/`

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
