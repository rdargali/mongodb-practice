const mongoose = require("mongoose");
const Book = require("./models/book");

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

// const book = new Book({
//   title: "Introduction to Mongo",
//   isbn: "sdffsd33",
//   author: "Rawand",
// });

// book.save((err, newBook) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(newBook);
//   }
// });
