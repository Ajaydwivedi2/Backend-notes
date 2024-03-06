"It is convention to have all the express convention in  the app.js file.";
"200 statusCode is the default status code that is send by the express server";
"node api terms is being referenced to code node modules like fs ans http module";
"resource name in the rest api should be in pluralf from.";
"POST suppose to create a new resource in the database where PUT and PATCHA suppose to update the existing resource";
"The data transfer from client to server and  from server to client should be in json forma by the rule of REST API";
"There are couple of standard for response formatting like JSend, This process is known as enveloping.";
"Endpoints should contain the resources not the actions that can be performed on them";
"We need to send atleat something to end the request and response cycle";
"In json everything should be in double quotes";
"We have to use express middleware {express.json()} to put the data on the request body that is sent by the client";
"middleware is a function that can modify the incoming requset data";
"middlware stands between the request and the response";
"We use app.use(middleware) method to use middleware like: app.use(express.json())";
object.assign(); // is used to merge two objects.
("The call backFunction in a route method aka route handlers");
// Use question mark for dynamic url params
// app.get('api/v1/tours/:id/:number/:book?',(req,res)=>{
// })

("Order of code matters a lot in express, all the middleware executes in the same order as we defined them in the code.");
("Mounting a new router on a route");
("In param middleware function we get access to the fourth parameter and that is value parameter.");
`When we open up a url that the browser can't find in any of the routes that we have defined then it will look into the public folder. and public folder servers as the root folder. It only works for the static files. To access the static files from the public folder we don't need to specify the public path in the URL.`;
`In node.js, environment variables comes from the process core module.`;
`In express many packages depends on a special variable called NODE_ENV and it tells wheather we are in development or production environment. And express does not defined this one (like express defines app.get('env)), So have to define it manually`;

`There are multiple ways to do it
1. through the terminal just before the command nodemon server.js like: NODE_ENV=development npm start
2. Create a config.env file, define all the variables
    a. install dotenv package COMM: npm i dotenv
    b. require it in app.js
    c. dotenv.config({path: path of the config.env file})
`;
`It is convention to define variable names in upper case in environment variables.`;
("To use eslint and prettier in a project we need to install their extention in vs code");
