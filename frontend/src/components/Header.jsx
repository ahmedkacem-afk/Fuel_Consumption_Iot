import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Camion Fuel Level Dashboard</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link className="hover:underline" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/reports">
                Reports
              </Link>
            </li>
            <li>
              <Link className="hover:underline" to="/settings">
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
