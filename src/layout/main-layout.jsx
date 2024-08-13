import React from "react";
import { Link, Navigate, Outlet } from "react-router-dom";
import { loadState } from "../config/storage";
import { IoMdSettings } from "react-icons/io";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { FaBasketShopping } from "react-icons/fa6";
import { IoCardOutline } from "react-icons/io5";

export const MainLayout = () => {
  const user = loadState("user");
  if (!user) {
    return <Navigate replace to={"/login"} />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="h-screen fixed bg-blue-500 p-4 w-[80px] flex flex-col items-center space-y-8 shadow-lg">
        <div className="mt-10 mb-8">
          <a href="/">
            <img
              src="./public/logo.svg"
              alt="Logo"
              className="w-[92px] h-auto hover:scale-110 transition-transform duration-300"
            />
          </a>
        </div>
        <nav className="flex flex-col space-y-6">
          <Link
            to={"/"}
            className="flex flex-col items-center justify-center text-white hover:text-yellow-300 transition-colors duration-300 group"
          >
            <IoMdSettings className="w-8 h-8 group-hover:scale-125 transition-transform duration-300" />
            <span className="text-xs mt-1">Settings</span>
          </Link>
          <Link
            to={"/category-list"}
            className="flex flex-col items-center justify-center text-white hover:text-yellow-300 transition-colors duration-300 group"
          >
            <FaBasketShopping className="w-8 h-8 group-hover:scale-125 transition-transform duration-300" />
            <span className="text-xs mt-1">Categories</span>
          </Link>
          <Link
            to={"/card"}
            className="flex flex-col items-center justify-center text-white hover:text-yellow-300 transition-colors duration-300 group"
          >
            <IoCardOutline className="w-8 h-8 group-hover:scale-125 transition-transform duration-300" />
            <span className="text-xs mt-1">Card</span>
          </Link>
          <Link
            to={"/accaunt"}
            className="flex flex-col items-center justify-center text-white hover:text-yellow-300 transition-colors duration-300 group"
          >
            <IoPeopleCircleOutline className="w-8 h-8 group-hover:scale-125 transition-transform duration-300" />
            <span className="text-xs mt-1">Account</span>
          </Link>
        </nav>
      </div>

      <div className="w-full flex-grow p-7 ml-[80px]">
        <div className="p-8 rounded-lg animate-fadeIn">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
