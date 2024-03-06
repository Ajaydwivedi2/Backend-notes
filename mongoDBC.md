# MongoDB and BSON

MongoDB utilizes BSON, a data type akin to JSON. While both JSON (JavaScript Object Notation) and BSON (Binary JSON) serve as data interchange formats, they possess some distinctions:

- **Human Readability:** JSON, being text-based, is easily readable and writable for humans. In contrast, BSON represents JSON-like documents in a binary format, enhancing storage and transmission efficiency at the cost of human readability.

- **Data Types:** JSON supports basic data types like strings, numbers, boolean values, arrays, objects, and null. BSON expands on JSON by incorporating additional data types such as Date, Binary Data, and Regular Expression, enabling representation of more complex data structures and native data types in programming languages.

- **Efficiency:** BSON excels in storage space and serialization/deserialization performance compared to JSON. Its compactness and optimization for binary data representation make it suitable for databases and network communication where efficiency is paramount.

- **Usage:** JSON is commonly employed for transmitting data between servers and web browsers or different parts of an application. It also finds widespread usage as a configuration format and for data interchange in web APIs. BSON, on the other hand, primarily serves MongoDB, a NoSQL database, for efficient data storage and querying.

BSON documents have a maximum size of 16MB, each containing a unique ID generated automatically with the ObjectID data type.

## Installation and Usage

To connect an application with a MongoDB database, installing a MongoDB driver is necessary.

Mongoose, an abstraction layer over the MongoDB driver and object data modeling library, provides a means of writing JavaScript code to interact with MongoDB databases. It utilizes native JavaScript data types and schema type options objects.

It's a common convention to use uppercase for model names. There are multiple approaches to implementing the MVC pattern.

## Querying and Operations

In JavaScript, `Model.prototype` refers to an object created from a class. In the case of Mongoose, it pertains to an object created from a model. Thus, the Mongoose `save()` method is accessible on all instances created from a model.

Methods like `find()`, `findById()`, `findByIdAndUpdate()` in Mongoose return a query object, allowing further chaining with methods for sorting, filtering, etc.

As per RESTful API standards, no data should be sent back to the client during a delete operation. Storing image references in the database, rather than the images themselves, is a common practice.

When inserting a document into MongoDB with a date value, MongoDB attempts to parse that date string into an actual date object. Users can filter data using a query string.

In Mongoose, database queries can be written using either a filter object or special Mongoose methods. Methods like `find()`, `findById()` return a query object that can be further chained with methods like sort, paginate, etc.

## Aggregation Pipeline

The aggregation pipeline, a MongoDB framework for data aggregation, is accessible in Mongoose. It involves defining a pipeline where documents from a collection undergo sequential processing to transform them into aggregated results. For instance, it can be used to calculate averages, minimum and maximum values, etc.

The `$group` stage in the aggregation pipeline facilitates grouping documents using an accumulator. The `_id` field in the `$group` stage specifies the grouping criteria. The `$push` operator creates a new array and populates it with document names.

## Virtual Properties

Mongoose supports virtual properties, which are defined in the schema but not persisted in the database. They are typically used for computed properties on documents.

## Middleware

Middleware in Mongoose enables the execution of functions before and after events. There are four types of middleware: document, query, aggregate, and model.

- **Document Middleware:** Acts on currently processed documents.
- **Query Middleware:** Executes functions before or after a query is executed.
- **Aggregate Middleware:** Runs hooks before and after an aggregation.
- **Model Middleware:** Acts on the entire collection.

## Data Validation and Sanitization

Data validation ensures that entered values adhere to the correct format for each field in the document schema and that all required fields have values. Data sanitization ensures input data cleanliness by removing unwanted characters and code.

Custom validators are functions that return true or false. Third-party validation packages like validate.js can also be used for validation.
