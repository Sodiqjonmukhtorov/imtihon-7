import React, { useEffect } from "react";
import { userCategoryList } from "../service/query/userCategoryList";
import { CategoryCard } from "../components/category-card";
import { Search } from "../components/Search";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css";

export const CategoryList = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const { data } = userCategoryList();

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div
        className="mb-8 flex flex-col items-center gap-6"
        data-aos="fade-down"
      >
        <Link
          to="/create-category"
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white rounded-full shadow-md hover:from-yellow-600 hover:to-yellow-700 transition-transform duration-300 transform hover:scale-105"
        >
          <FaPlus className="text-xl" />
          <span className="text-lg font-semibold">Create Category</span>
        </Link>
        <Search className="flex items-center gap-3 px-4 py-3 w-full max-w-lg bg-gray-200 text-gray-700 rounded-full shadow-md hover:bg-gray-300 transition-colors duration-300">
          <AiOutlineSearch className="text-xl text-gray-500" />
          <input
            type="text"
            placeholder="Search categories..."
            className="w-full bg-transparent text-gray-700 placeholder-gray-500 focus:outline-none"
          />
        </Search>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {data?.map((item) => (
          <CategoryCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
