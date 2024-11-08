// BookList.js
import React from "react";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  return (
    <div>
      {books.length > 0 ? (
        books.map((book) => <BookCard key={book.key} book={book} />)
      ) : (
        <p>No books to display.</p>
      )}
    </div>
  );
};

export default BookList;
