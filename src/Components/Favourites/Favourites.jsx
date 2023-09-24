import React from "react";
import { Link } from "react-router-dom";

const Favourites = () => {
  return (
    <>
      <ul className="menu menu-horizontal mx-auto justify-center flex max-w-fit mb-10 gap-5 bg-base-200 rounded-box">
        <li className="menu-item">
          <Link> All </Link>
        </li>
        <li>
          <Link> Electronics </Link>
        </li>
        <li>
          <Link>Jewelery</Link>
        </li>
        <li>
          <Link>Women's Clothing</Link>
        </li>
        <li>
          <Link>Men's Clothing</Link>
        </li>
      </ul>
    </>
  );
};

export default Favourites;
