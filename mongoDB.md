# MongoDB and BSON

MongoDB uses BSON data type similar to JSON. JSON (JavaScript Object Notation) and BSON (Binary JSON) are both data interchange formats, but they have some differences:

- **Human Readability:** JSON is a text-based format that is easy for humans to read and write. BSON, on the other hand, is a binary representation of JSON-like documents, making it more compact and efficient for storage and transmission but not human-readable.

- **Data Types:** JSON supports a limited set of data types, including strings, numbers, boolean values, arrays, objects, and null. BSON extends JSON to include additional data types such as Date, Binary Data, Regular Expression, and more. This allows BSON to represent more complex data structures and native data types in programming languages.

- **Efficiency:** BSON is generally more efficient in terms of storage space and serialization/deserialization performance compared to JSON. This is because BSON is designed to be more compact and optimized for binary data representation, making it suitable for use in databases and network communication where efficiency is crucial.

- **Usage:** JSON is commonly used for transmitting data between a server and a web browser or between different parts of an application. It is also widely used as a configuration format and for data interchange in web APIs. BSON, on the other hand, is primarily used in MongoDB, a NoSQL database, for storing and querying data efficiently.

The maximum size of a BSON document can be 16MB, and each document contains a unique id which is automatically generated with ObjectID data type.

## Installation and Usage

To connect an app with a MongoDB database, a MongoDB driver needs to be installed.

Mongoose is an abstraction layer over the MongoDB driver and object data modeling library. It provides a way of writing JavaScript code to interact with MongoDB databases. Mongoose uses native JavaScript data types and schema type options objects.

It is a programming convention to use uppercase for model names. There are multiple ways to implement the MVC pattern.

## Querying and Operations

In JavaScript, `Model.prototype` refers to an object created from a class, and in the case of Mongoose, it is created from a model. So, Mongoose `save()` method is available on all the instances created from a model.

In Mongoose, methods like `find()`, `findById()`, `findByIdAndUpdate()` return a query object, which can be further chained with methods for sorting, filtering, etc.

It is a RESTful API rule to not send back any data to the client during a delete operation. Storing the reference of the image in the database instead of the image itself is a common practice.

When inserting a document into MongoDB with a date value, MongoDB will attempt to parse that date string into an actual date object. Users can filter data using a query string.

In Mongoose, there are two ways to write database queries: using a filter object or using special Mongoose methods. Methods like `find()`, `findById()`, etc., return a query object that can be further chained with methods like sort, paginate, etc.

## Aggregation Pipeline

The aggregation pipeline is a MongoDB framework for data aggregation, and Mongoose gives access to it. The idea is to define a pipeline where all documents from a certain collection go through and are processed step by step to transform them into aggregated results. For example, the aggregation pipeline can be used to calculate averages, minimum and maximum values, etc.

The `$group` stage in the aggregation pipeline allows grouping documents together using an accumulator. The `_id` field in the `$group` stage defines what to group by. The `$push` operator creates a new array and pushes the name of each document into it.

## Virtual Properties

Virtual properties in Mongoose are properties defined in the schema that are not persisted in the database. They are typically used for computed properties on documents.

## Middleware

Middleware in Mongoose allows running functions before and after events. There are four types of middleware: document, query, aggregate, and model.

- **Document Middleware:** Acts on currently processed documents.
- **Query Middleware:** Allows running functions before or after a certain query is executed.
- **Aggregate Middleware:** Allows running hooks before and after an aggregation.
- **Model Middleware:** Acts on the entire collection.

## Data Validation and Sanitization

Data validation ensures that entered values are in the right format for each field in the document schema and that values have been entered for all required fields. Data sanitization ensures that input data is clean, removing unwanted characters and code.

Custom validators are functions that return true or false. Third-party validation packages like validate.js can also be used for validation.
