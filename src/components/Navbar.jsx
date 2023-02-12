import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex h-20 w-full flex-col flex-wrap items-center justify-between bg-indigo-500 px-9 md:flex-row">
      <h1 className="flex-1 py-1 text-2xl font-semibold tracking-tight text-white">
        CodeSite Dump
      </h1>

      <ul className="flex w-full flex-1 justify-around text-xl text-white hover:cursor-pointer">
        <Link to="">
          <li>Home</li>
        </Link>
        <Link to="blog">
          <li>Blogs</li>
        </Link>
        <Link to="about">
          <li>About</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
