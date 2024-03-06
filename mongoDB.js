`mongoDB uses BSON data type similar to JSON,
JSON (JavaScript Object Notation) and BSON (Binary JSON) are both data interchange formats, but they have some differences:

    Human Readability: JSON is a text-based format that is easy for humans to read and write. BSON, on the other hand, is a binary representation of JSON-like documents, making it more compact and efficient for storage and transmission but not human-readable.

    Data Types: JSON supports a limited set of data types, including strings, numbers, boolean values, arrays, objects, and null. BSON extends JSON to include additional data types such as Date, Binary Data, Regular Expression, and more. This allows BSON to represent more complex data structures and native data types in programming languages.

    Efficiency: BSON is generally more efficient in terms of storage space and serialization/deserialization performance compared to JSON. This is because BSON is designed to be more compact and optimized for binary data representation, making it suitable for use in databases and network communication where efficiency is crucial.

    Usage: JSON is commonly used for transmitting data between a server and a web browser or between different parts of an application. It is also widely used as a configuration format and for data interchange in web APIs. BSON, on the other hand, is primarily used in MongoDB, a NoSQL database, for storing and querying data efficiently.

`;
`The maximum size of a BSON document can be 16MB
And each document contains a unique id which is automatically generated with objectID data type.`;

("We need to install a mongoDB driver to connect our app with mongoDB database");

`mongoose is an abstraction layer over mongoDB driver and object data modeling library is just a way of writting javascript code that then will interact with mongoDB database.`;
`We can also use mongoDB driver to interact with mongoDB database but mongoose offerrs a bit of flexibility and easier way to interact with mongoDB database`;
("mongoose uses native javascript datatypes");
("schema type options object.");
("It is a programming convention to use uppcercase for model name");
("There are multiple ways to implement to implement MVC pattern ");
("A rejected promise is handled in catch block");
("runValidators: Each time we upadte the certain document then The validator that we defined in a certail schema will run again");

`In javascript Model.prototype means a object created from a class and in case of mongoose created from a model`;
`So mongoose save() method is available on all the instances created from a model `;
`In mongoose find(), findById(), findByIdAndUpdate() etc all returns a query object and further we can use on to them sorting and filtering etc`;
("It is a restfull api rule to not send back any data to the client when there a delete operation");
("It is a common practice to store the reference of the image in the database not the image itself");
("When you insert a document into MongoDB that includes a field with a date value, MongoDB will attempt to parse that date string into an actual date object.");
("Allow users to filter data using a query string.");
("In mongoose there are actually two ways of writting database queries 1. use filter object 2. use special mongoose methods");
`The find, findById, etc methods returns a object which is a query that further we can use to chain other methods like sort, paginate, etc and we can found these methods on the query.prototype object`;
`There are two types of operator in mongoDB that are Query and Projection operator.`;
`To work with an API try to look for its documentation, You will get their everything that how a certain things work. And if you build your own API then also write a documentation for that for the other developers who will use it.`;
`In mongoose selecting only certain fileds name is called projecting`;
`__v property is created in every mongoose docuement by mongoose for its internal use.`;
`In select method prefixing (-) in any field, means we don't want that field (exclude that field).`;
`In mongoose we can also exclude fields right from the schema.`;
`Aliasing: aliasing typically refers to the practice of assigning alternative names or identifiers to resources, endpoints, parameters, or methods. Aliasing can serve several purposes, including improving readability, providing compatibility with legacy systems, and creating shortcuts for frequently used functionality.`;
`Aggregation pipeline is a mongoDB framewoork for data aggregation. and mongoose gives us access to it so that we can use it`;
`Idea is to we define a pipeline that all the document from a certain collection go through where they are processed step by step in order to transform them into aggregated results
for example we can use aggregation pipeline to calculate averages, min and max values
`;
`group allows to group documents togeather using accumulator. the _id field in the group stage defines what we want to group by, Also we can group by any of the documents field by specifing the field name as id of the group stage
#. If you want to calculate some statistics for the document available in a collection the set the _id field in the group stage to null`;

`{ $project: { _id: 0 } }, with the project operator you can remove any field from any document`` { $unwind: '$startDates' },
#1. $unwind Deconstructs an array field from the input documents to output a document for each element. Each output document is the input document with the value of the array field replaced by the element.
#2. $month Returns the month of a date as a number between 1 and 12.`;
`$group: {
    _id: { $month: '$startDates' },
    numTours: { $sum: 1 },
    tours: { $push: '$name' },
  },

  $push operator creates a new array and pushes the name of each documents in it.`;

`{ $addFields: { month: '$_id' } },

$addFields creates a new field in a document.`;
`virtual properties are properties that we can define in our schema that will not be persisted, they will not be saved in out database`;

`virtual properties in mongoose:
In Mongoose, a virtual is a property that is not stored in MongoDB database. Virtuals are typically used for computed properties on documents. (every document that is returned after quering the database), we attach the virtual property

#1. We calculate a property after defining the schema using

tourSchema.virtual('durationWeeks').get(function () {
    return this.duration / 7;
  });

after that we attach an option object to the schema

{
    toObject: { virtuals: true },
    toJSON: { virtuals: true },
  },

now everytime a new document is queried from the database this property is attahhed to it.
`;

`In mongoose we can have middleware running before and after a event like in case of document middleware its save event,
There are four types of middleware in mongoose
1. document (acts on currently processed documents)
2. query
3. aggregate
4. model
`;

`Query middleware allows us to run function before or after a certain query is executed.`;

`#. find() or anyother method returns a query object to futher add any additional query methods but without using await keywords, and we use use await keyword to resolve that query to get final result.`;

`Aggregation middleware allows us to run hooks before and after an aggregation happpens.`;

`Aggregation stages: We can have same stage multiple times in a aggregation pipeline. `;

`Data validation and data sanitization:
  data validation means chechking if the entered values are in right format for each filed in our document schema and also that values have been entered for all of the required fields.
  data sanitization means to ensure that input data is clean means there is no malisious code been injected in our database.
  In that step we remove unwanted character and unwanted code from input data.
  It is standared in backend development to never ever accept incoming data as it is, developer should always need to sanatize the incoming data.
  #. unique is not a data validator.
`;

`CUSTOM VALIDATOR:
A validator is simply a function that simply returns TRUE or FALSE, If validator function returns false then there is an error and if returns true then means validation is correct input data is correct and can be process further.
In custom validator 'this keyword only points to the current document when a new document is created, this keyword points to something else, when an existing document is updated.
We can also use third party validation packages to validate our input data. like: validate.js,
`;
