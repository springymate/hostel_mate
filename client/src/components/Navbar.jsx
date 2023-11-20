// import React from 'react'
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-2/3 mx-auto p-5 flex justify-between items-center">
      <h1 className="font-bold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-red-400 bg-clip-text text-transparent md:text-4xl">
        <Link to='/'>
        hostelmate
        </Link>
      </h1>
      <ul className="flex space-x-5 text-gray-500 items-center font-semibold">
        <li>
          <Link to="/rooms">Rooms</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <button className="border px-2 py-1 rounded border-gray-800 hover:text-black">
            <Link to="/login">Login</Link>
          </button>
        </li>
        <li>
          <button className="border py-1 px-2 rounded border-gray-700 hover:text-black">
            <Link to="/signup">Signup</Link>
          </button>
        </li>
      </ul>
    </div>
  );
};
