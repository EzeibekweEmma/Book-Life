import React from "react";
import { NavLink } from "react-router-dom";

const HostHeader = () => {
  const linkStyle =
    "px-2 py-1 text-sm mx-1 hover:bg-sky-700 hover:text-white rounded-xl";
  const isActive = ({ isActive }) =>
    isActive
      ? `bg-sky-700 border-green-500 border-l-4 text-white ${linkStyle}`
      : linkStyle;
  return (
    <header>
      <nav className="p-2 bg-sky-100 font-bold">
        <NavLink end className={isActive} to=".">
          Dashboard
        </NavLink>
        <NavLink className={isActive} to="income">
          Income
        </NavLink>
        <NavLink className={isActive} to="books">
          Books
        </NavLink>
        <NavLink className={isActive} to="reviews">
          Reviews
        </NavLink>
      </nav>
    </header>
  );
};

export default HostHeader;
