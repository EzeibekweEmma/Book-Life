import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const HostBooks = () => {
  const [bookApi, setBookApi] = useState([]);
  useEffect(() => {
    fetch("https://api.itbook.store/1.0/new")
      .then((res) => res.json())
      .then((data) => {
        // The code generates a random hostID from the randomHostId array
        // and assigns it to the url property of each book in the data.
        const dataUrl = data.books;
        const randomHostId = [101, 202, 303, 404, 505, 606, 707];
        for (let i in dataUrl) {
          const selectRandomHostId = Math.floor(
            Math.random() * randomHostId.length
          );
          dataUrl[i].url = randomHostId[selectRandomHostId];
          setBookApi(dataUrl);
        }
      });
  }, []);

  //The eachHostBook variable is created by mapping over the bookApi array and
  // rendering a HostBook component for each book. Only books with a url value
  // of 404 will be rendered
  const eachHostBook = bookApi.map((data) =>
    data.url === 404 ? <HostBook data={data} key={data.isbn13} /> : undefined
  );
  return (
    // The component's return statement renders a section element containing the
    // title and the list of books. If the bookApi array is empty, a loading
    // message is displayed; otherwise, the eachHostBook variable is rendered
    <section className="p-5 font-bold  bg-sky-100">
      <h2 className="text-2xl my-3">Your listed books</h2>
      {bookApi.length === 0 ? (
        <h2 className="text-4xl font-mono italic">Loading...</h2>
      ) : (
        eachHostBook
      )}
    </section>
  );
};
// the HostBook component takes a prop object data as input. It renders an
// individual book item with an image, title, and price.
const HostBook = ({ data: { image, title, price, isbn13 } }) => {
  return (
    <Link to={`/host/books/${isbn13}`}>
      <div className="flex  bg-white rounded-md p-3 mb-3">
        <img
          src={image}
          alt={image}
          height={40}
          width={50}
          className="bg-slate-300 rounded-md mr-3"
        />
        <article className="items-center">
          <h3>{title}</h3>
          <span className="font-normal text-sm text-gray-400">{price}</span>
        </article>
      </div>
    </Link>
  );
};

export default HostBooks;
