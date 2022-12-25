import React from "react";
import SearchBar from "~/SearchBar/SearchBar";
import NavItem from "./NavItem";

function Navbar() {
  return (
    <header>
      <ul className="bg-transparent h-16 items-center justify-evenly w-full flex  z-[1] fixed">
        <NavItem to="/" title="HOME" />
        <NavItem to="/s" title="HOME" />
        <SearchBar />
        <NavItem to="/e" title="HOME" />
        <NavItem to="/g" title="HOME" />
      </ul>
    </header>
  );
}

export default Navbar;
