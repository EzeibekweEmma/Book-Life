import { NavLink } from "react-router-dom";

const Header = () => {
  const linkStyle = "p-2 mx-1 hover:bg-sky-700 hover:text-white rounded-xl";
  const isActive = ({ isActive }) =>
    isActive
      ? `bg-sky-700 border-green-500 border-l-4 text-white ${linkStyle}`
      : linkStyle;

  return (
    <header className="flex justify-between p-5 bg-sky-200 font-bold">
      <NavLink className="text-2xl" to="/">
        #BOOKLIFE
      </NavLink>
      <nav>
        <NavLink className={isActive} to="host">
          Host
        </NavLink>
        <NavLink className={isActive} to="about">
          About
        </NavLink>
        <NavLink className={isActive} to="books">
          Books
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
