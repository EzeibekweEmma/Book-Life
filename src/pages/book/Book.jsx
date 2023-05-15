import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book: { isbn13, title, price, subtitle, image } }) => {
  return (
    <Link
      className="max-w-xs m-2 hover:border-y-4 rounded-xl border-green-600"
      to={`/books/${isbn13}`}
    >
      <img
        src={image}
        height={350}
        width={320}
        className="bg-slate-300 rounded-md"
        alt={title}
      />
      <div className="flex justify-between items-center">
        <span className="text-sm">{title}</span>
        <span className="text-xs rounded-sm font-semibold p-0.5 m-0.5 bg-orange-700">
          {price}
        </span>
      </div>
      <span className="text-xs font-thin text-gray-400">{subtitle}</span>
    </Link>
  );
};

export default Book;
