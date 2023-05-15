import React, { useState, useEffect } from "react";
import Book from "./Book";

const Books = () => {
  const [bookApi, setBookApi] = useState([]);
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => setBookApi(data.books));
  }, []);

  const newBook = bookApi.map((book) => <Book key={book.isbn13} book={book} />);
  return (
    <section className="flex flex-wrap justify-center p-7 bg-slate-700 text-white">
      {bookApi.length === 0 ? (
        <h2 className="text-4xl font-mono italic">Loading...</h2>
      ) : (
        newBook
      )}
    </section>
  );
};

export default Books;
