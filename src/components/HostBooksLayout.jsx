import React, { useState, useEffect } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

const HostBooksDetail = () => {
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

  const linkStyle =
    "p-1.5 ml-1 text-sm hover:bg-sky-700 hover:text-white rounded-xl";
  const isActive = ({ isActive }) =>
    isActive
      ? `bg-sky-700 border-green-500 border-l-4 text-white ${linkStyle}`
      : linkStyle;

  return (
    <section className="flex bg-slate-700 justify-center">
      {bookId ? (
        <div className="max-w-full m-5 p-2 rounded-md">
          <Link
            to=".."
            relative="path"
            className="p-1 text-sm text-green-500 rounded-lg"
          >
            ‹‹‹ Back to available books
          </Link>
          <div className=" bg-white rounded-md items-center p-5 mb-3">
            <header>
              <section className="flex items-center py-1 mr-2">
                <img
                  src={image}
                  alt={image}
                  height={80}
                  width={90}
                  className="bg-slate-300 rounded-md mr-3"
                />
                <article className="items-center">
                  <h3 className="font-bold">{title}</h3>
                  <span className="font-normal text-sm text-gray-400">
                    {price}
                  </span>
                </article>
              </section>
              <nav className="mt-1.5">
                <NavLink to="." end className={isActive}>
                  Details
                </NavLink>
                <NavLink to="pricing" className={isActive}>
                  Pricing
                </NavLink>
                <NavLink to="photos" className={isActive}>
                  Photos
                </NavLink>
              </nav>
            </header>
            <Outlet context={{bookId}}/>
          </div>
        </div>
      ) : (
        <h2 className="text-4xl italic font-mono py-4 font-">Loading...</h2>
      )}
    </section>
  );
};
export default HostBooksDetail;
