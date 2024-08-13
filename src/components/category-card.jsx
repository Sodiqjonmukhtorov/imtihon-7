import React from "react";
import { useNavigate } from "react-router-dom";

export const CategoryCard = ({ id, name, img }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full max-w-xl flex-col md:flex-row items-center p-6 shadow-lg bg-gradient-to-r from-white to-gray-100 rounded-3xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col items-center mb-6 md:mb-0 md:items-start">
        <img
          src={img}
          alt="Category"
          className="w-32 h-32 object-cover ml-20 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        />
        <h2 className="text-xl font-bold text-gray-900 mt-4 p-2 text-center ml-20">{name}</h2>
      </div>
      <div className="flex md:flex-row ml-10 gap-4 mt-4 md:mt-0">
        <button
          onClick={() => navigate(`/category-product/${id}`)}
          className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-lg hover:bg-blue-600 "
        >
          Show
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white text-sm font-medium rounded-lg hover:bg-red-600"
        >
          Delete
        </button>
        <button
          className="px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-lg hover:bg-yellow-600 "
        >
          Edit
        </button>
      </div>
    </div>
  );
};
