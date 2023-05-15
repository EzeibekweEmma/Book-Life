import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="flex flex-col p-7 bg-slate-700 text-white">
      <article className="bg-slate-700 text-2xl font-bold">
        You got the Book names, We got the Books.
      </article>
      <article>You got the Book names, We got the Books.</article>
      <Link className="bg-slate-800 py-3 rounded-xl text-center 
      hover:bg-slate-900 my-10" to="/books">
        Find your Book
      </Link>
    </section>
  );
};

export default Home;
 