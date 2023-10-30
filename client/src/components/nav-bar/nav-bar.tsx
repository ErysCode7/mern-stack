import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const routes = [
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/about",
      text: "about",
    },
    {
      id: 3,
      path: "/contact",
      text: "contact",
    },
  ];

  return (
    <nav className="h-20 shadow-sm border-b bg-white">
      <div className="flex items-center h-full w-[85%] m-auto gap-5">
        {/* LOGO */}
        <div>
          <img src="/vite.svg" alt="logo" />
        </div>
        {/* ROUTES */}
        <ul className="flex items-center gap-5">
          {routes.map((route) => (
            <li key={route.id}>
              <Link to={route.path} className="uppercase font-bold text-black">
                {route.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
