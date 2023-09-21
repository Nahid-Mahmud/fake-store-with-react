
import { NavLink } from "react-router-dom";
import "./Header.css"

const Header = () => {
  return (
    <nav>
      <ul className="flex text-2xl font-medium justify-center py-10 gap-10">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Store</NavLink>
      </ul>
    </nav>
  );
};

export default Header;
