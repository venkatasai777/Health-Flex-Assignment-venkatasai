# Health-Flex-Assignment-by-venkatasai

# Overview
I have completed the backend assignment for Health Flex using Node.js and Express. Your task was to build a RESTful API for  sample twitter Tweets. Below is a sample test to demonstrate the endpoints I have implemented and their functionalities.

# Assignment Objectives 
1. Schema Design: Design MongoDB collections for users and tweets. 
2. RESTful APIs: Develop minimal RESTful APIs using Node.js and Express.js for user registration, posting tweets, and fetching timelines. 
3. Authentication: Implement basic user authentication using JWT tokens.


# API Endpoints 

1. User Register

   End Point : '/api/users/register'
   method : "POST"

   sample payload : {
             username : "",
             password : ""
       }

3. User Login

     End Point : 'api/users/login'
      method : "POST
      sample payload : {
             username : "vinaykumar",
             password : "vinay2024"
       }
4. Create Tweet :
     End Point : "/api/tweets"
     method : "POST"
   
     # requires JWT Token
   
     sampe payload : {
           text : "Welcome to the Health Flex"
     }

5. get Tiemline Of a User

   End Point : "/api/users/:userId/timeline"
   
     method : "GET"
   
     params = {
       userId : (usersId)
     }
   
