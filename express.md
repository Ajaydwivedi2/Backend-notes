# Express Conventions and REST API

It is conventional to have all the Express configurations in the `app.js` file.

The default status code sent by the Express server is `200`.

Node API terms reference code modules like `fs` and `http`.

Resource names in REST APIs should be in plural form.

In RESTful APIs, `POST` is used to create a new resource in the database, while `PUT` and `PATCH` are used to update existing resources.

Data transfer between client and server should be in JSON format according to REST API rules.

There are several standards for response formatting like JSend; this process is known as enveloping.

Endpoints should contain resources, not the actions that can be performed on them.

At least something needs to be sent to end the request and response cycle.

In JSON, everything should be in double quotes.

Express middleware, such as `express.json()`, is used to parse data sent by the client and put it on the request body.

Middleware is a function that can modify incoming request data and stands between the request and the response.

The `app.use(middleware)` method is used to apply middleware, such as `app.use(express.json())`.

`Object.assign()` is used to merge two objects.

A callback function in a route method is known as a route handler.

Dynamic URL params should be denoted with a question mark, for example:

```javascript
app.get("/api/v1/tours/:id/:number/:book?", (req, res) => {});
```
