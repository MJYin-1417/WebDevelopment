// const { MongoClient } = require("mongodb");
// // Replace the uri string with your MongoDB deployment's connection string.
// const uri =
//   "mongodb+srv://<user>:<password>@<cluster-url>?retryWrites=true&writeConcern=majority";
// const client = new MongoClient(uri);
// async function run() {
//   try {
//     await client.connect();
//     const database = client.db('sample_mflix');
//     const movies = database.collection('movies');
//     // Query for a movie that has the title 'Back to the Future'
//     const query = { title: 'Back to the Future' };
//     const movie = await movies.findOne(query);
//     console.log(movie);
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
//
// const url = 'mongodb://localhost:27017';
//
// const dbName= 'fruitsDB';
//
// const client = new MongoClient(url);
//
// client.connect(function(err){
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   findDocuments(db, function(){
//     client.close();
//   });
// });
//
//   const insertDocuments = function(db, callback){
//     const collection = db.collection('fruits');
//     collection.insertMany([
//       {
//         name: "Apple",
//         score: 8,
//         review: "Great fruit"
//       },
//       {
//         name: "Orange",
//         score: 6,
//         review: "Kinda sour"
//       },
//       {
//         name: "Banana",
//         score: 9,
//         review: "Great stuff!"
//       }
//     ], function(err, result){
//         assert.equal(err, null);
//         // assert.equal(3, result.result.n);
//         // assert.equal(3, result.ops.length);
//         console.log("Inserted 3 documents into the collection");
//         callback(result);
//     });
//   }
//
//   const findDocuments = function(db, callback){
//     const collection = db.collection('fruits');
//     collection.find({}).toArray(function(err, docs){
//       assert.equal(err, null);
//       console.log("Found the following records");
//       console.log(docs);
//       callback(docs);
//     });
//   }

const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB");
//schema to construct blueprint Fruit
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});
//blueprint for fruit documents
const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  rating: 10,
  review: "Peaches are so yummy"
});

//fruit.save();

const peopleSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
});

const Person = mongoose.model("Person", peopleSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  score: 9,
  review: "Great fruit."
})

// pineapple.save();

// const person = new Person({
//   name: "Amy",
//   age: 37,
//   favoriteFruit: pineapple
// })

// person.save();


// const person = new Person({
//   name: "John",
//   age: 37
// });
//
// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  score: 10,
  review: "The best fruit!"
});

const orange = new Fruit({
  name: "Orange",
  score: 4,
  review: "Too sour for me"
});


const banana = new Fruit({
  name: "Banana",
  score: 3,
  review: "Weird texture"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   } else{
//     console.log("Successfully saved all the fruits to fruitsDB");
//   }
// });

// Fruit.find(function(err, fruits){
//   if(err){
//     console.log(err);
//   } else{
//     fruits.forEach( fruit => {
//       console.log(fruit.name);
//     });
//     mongoose.connection.close();
//   }
// });

// Fruit.updateOne({_id: "6259dabc27b903462135b126"}, {name: "Peach"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully updated the document");
//     mongoose.connection.close()
//   }
// });

// Fruit.deleteOne({_id: "6259dabc27b903462135b126"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted the document");
//     mongoose.connection.close()
//   }
// });

// Person.deleteMany({name: "John"}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully deleted many documents");
//   }
// });

// const melon = new Fruit({
//   name: "Melon",
//   score: 8,
//   review: "Melon too sweet"
// });
//
// melon.save();
//
// Person.updateOne({name: "John"}, {favoriteFruit: melon}, function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully set favoriteFruit for John");
//   }
// });
