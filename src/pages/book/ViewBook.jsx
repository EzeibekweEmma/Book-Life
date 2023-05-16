import React, { useState, useEffect } from "react";
import { useParams, Link, useLocation } from "react-router-dom";

const ViewBook = () => {
  const [bookId, setBookId] = useState("");
  const param = useParams();

  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => {
        for (let i in data.books)
          param.id === data.books[i].isbn13 ? setBookId(data.books[i]) : "";
      });
  }, [param.id]);

  const { image, title, price, subtitle } = bookId;

  const location = useLocation();
  const backToBooks = location.state?.search || "";
  const backToWhatBooks = location.state?.type || "all";
  
  return (
    <section className="flex bg-slate-700 text-white justify-center">
      {bookId ? (
        <div className="max-w-full m-5 p-2 rounded-md">
          <Link
            to={`..?${backToBooks}`}
            relative="path"
            className="p-1 text-sm  text-green-500 rounded-lg"
          >
            ‹‹‹ Back to {backToWhatBooks} books
          </Link>
          <img
            src={image}
            width="100%"
            className="bg-slate-300  rounded-md"
            alt={title}
          />
          <div className="flex justify-between items-center">
            <span className="text-sm">{title}</span>
            <span className="text-xs rounded-sm font-semibold p-0.5 m-0.5 bg-orange-700">
              {price}
            </span>
          </div>
          <span className="text-xs font-thin text-gray-400">{subtitle}</span>
        </div>
      ) : (
        <h2 className="text-4xl italic font-mono py-4 font-">Loading...</h2>
      )}
    </section>
  );
};

export default ViewBook;
