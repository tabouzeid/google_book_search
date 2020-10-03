const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// volumeInfo.imageLinks.thumbnail
// volumeInfo.previewLink
// volumeInfo.title
// volumeInfo.authors
// volumeInfo.description

const BookSchema = new Schema({
  _id: {
    type: String,
    trim: true,
  },

  link: {
    type: String,
    trim: true,
  },

  image: {
    type: String,
    trim: true,
  },

  title: {
    type: String,
    trim: true,
  },

  authors: {
    type: [String],
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
