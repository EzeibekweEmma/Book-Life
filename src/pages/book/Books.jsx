import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  const [bookApi, setBookApi] = useState([]);
  const [urlParam, setUrlParam] = useSearchParams();
  const typeFilter = urlParam.get("type");

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => {
        // The code generates a random hostID from the randomHostId array
        // and assigns it to the url property of each book in the data.
        const dataUrl = data.books;
        const randomHostId = ["python", "java", "javascript", "php"];
        for (let i in dataUrl) {
          const selectRandomHostId = Math.floor(
            Math.random() * randomHostId.length
          );
          dataUrl[i].url = randomHostId[selectRandomHostId];
          setBookApi(dataUrl);
        }
      });
  }, []);
  //filting the book
  const displayedBooks = typeFilter
    ? bookApi.filter(
        (url) => url.url.toLocaleLowerCase() === typeFilter.toLocaleLowerCase()
      )
    : bookApi;
  // console.log(displayedBooks);

  const newBook = displayedBooks.map((book) => (
    <Book key={book.isbn13} book={book} />
  ));

  const styledParam = "px-1.5 py-1 mr-1 rounded-md hover:border";
  return (
    <section className=" p-7 bg-slate-700 text-white">
      <h2>Explore Our Book Options</h2>
      <section>
        <button
          className={
            typeFilter === "python"
              ? `${styledParam} bg-blue-800 border`
              : `${styledParam}  bg-blue-800`
          }
          onClick={() => setUrlParam({ type: "python" })}
        >
          Python
        </button>
        <button
          className={
            typeFilter === "java"
              ? `${styledParam} bg-yellow-800 border`
              : `${styledParam}  bg-yellow-800`
          }
          onClick={() => setUrlParam({ type: "java" })}
        >
          Java
        </button>
        <button
          className={
            typeFilter === "javaScript"
              ? `${styledParam} bg-yellow-500 border`
              : `${styledParam}  bg-yellow-500`
          }
          onClick={() => setUrlParam({ type: "javaScript" })}
        >
          JavaScript
        </button>
        <button
          className={
            typeFilter === "php"
              ? `${styledParam} bg-purple-600 border`
              : `${styledParam}  bg-purple-600`
          }
          onClick={() => setUrlParam({ type: "php" })}
        >
          PHP
        </button>
        {typeFilter !== null ? (
          <button
            className={`${styledParam} bg-green-500`}
            onClick={() => setUrlParam({})}
          >
            Clear Fliter
          </button>
        ) : null}
      </section>
      <section className="flex flex-wrap justify-center">
        {bookApi.length === 0 ? (
          <h2 className="text-4xl font-mono italic">Loading...</h2>
        ) : (
          newBook
        )}
      </section>
    </section>
  );
};

export default Books;
