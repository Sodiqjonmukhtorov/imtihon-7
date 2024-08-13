import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export const ProductCard = ({ id, name, img, price, categoryId, onDelete }) => {
  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("authToken");
       

      const response = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
      });

      if (!response.ok) {
        throw new Error("O'chirishda xato yuz berdi");
      }

      if (onDelete) onDelete(id);
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="flex w-[100p flex-col p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105">
      <img src={img} alt={name} className="w-full h-32 object-cover rounded-md mb-4" />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <strong className="text-lg text-gray-700">${price}</strong>
      <div className="flex items-center gap-4 mt-4">
        <button
          onClick={handleDelete}
          className="flex items-center gap-2 p-3 text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition-colors duration-300"
        >
          <FaTrash className="text-xl" />
          Delete
        </button>
        <button
          className="flex items-center gap-2 p-3 text-white bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500 transition-colors duration-300"
        >
          <FaEdit className="text-xl" />
          Edit
        </button>
      </div>
    </div>
  );
};
