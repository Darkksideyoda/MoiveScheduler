import React from "react";
import { NavLink } from "react-router-dom";
type Props = {
  title: string;
  to: string;
};
function NavItem(props: Props) {
  const { title, to } = props;
  return (
    <NavLink className="text-white flex no-underline group cursor-default" to={to}>
      <span className="font-nav-link text-lg px-6 rounded-full cursor-pointer hover:bg-orange-800 group-[&.active]:bg-orange-800 ">
        {title}
      </span>
    </NavLink>
  );
}

export default NavItem;
