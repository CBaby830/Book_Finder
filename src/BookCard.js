// BookCard.js
import React from "react";

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>
        Author: {book.author_name ? book.author_name.join(", ") : "Unknown"}
      </p>
      <p>First Published: {book.first_publish_year || "N/A"}</p>
      {book.isbn && (
        <img
          src={`https://openlibrary.org/search.json?title=%7BbookTitle`}
          alt={book.title}
        />
      )}
    </div>
  );
};

export default BookCard;
