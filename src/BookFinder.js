import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import BookList from "./BookList";

function BookFinder() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBooks = async (query) => {
    setLoading(true);
    setError(null); // Reset error on new search
    setBooks([]); // Clear previous results

    if (!query.trim()) {
      setError("Please enter a search term.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${query}`
      );
      if (response.data.numFound === 0) {
        setError("No books found for your search.");
      } else {
        setBooks(response.data.docs);
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="BookFinder">
      <h1>Book Finder</h1>
      <SearchBar onSearch={fetchBooks} />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <BookList books={books} />
      )}
    </div>
  );
}

export default BookFinder;
