const mongoose = require("mongoose");
const Book = require("./models/book");
const { db } = require("./models/book");

mongoose.connect(
  "mongodb://127.0.0.1:27017/hello-mongo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log("Unable to connect to database");
    } else {
      console.log("Connected to database");
    }
  }
);

//*shell commands*
// "mongo" - open mongo cli,
// "show dbs" - show databases.
// "use <name of database>" - jump into database
// "show collections" - show schema or models of db
// "db.<name of model/collection>.find()" - shows entries inside collection

// *insert book into db*
// const book = new Book({
//   title: "trying something new ",
//   isbn: "new324",
//   author: "Nujeen",
// });

// book.save((err, newBook) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(newBook);
//   }
// });

//*empty object as first parameter will find all*
// Book.find({}, (err, books) => {
//     console.log(books);
//   });

//*find by id*
// Book.findById("5f20f8a3c7065da203636119", (err, book) => {
//   console.log(book);
// });

// //*find by key*
// Book.findOne({ author: "Rawand" }, (err, book) => {
//   console.log(book);
// });
