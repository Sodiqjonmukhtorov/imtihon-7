import React from "react";
import { Link, useParams } from "react-router-dom";
import { useProductList } from "../service/query/useProductList";
import { ProductCard } from "../components/product-card";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";

export const CategoryProduct = () => {
  const { id } = useParams();
  const { data } = useProductList(id);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <motion.div
        className="mb-8 flex justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          to={"/create-product"}
          className="flex items-center justify-center w-full max-w-lg p-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-lg shadow-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
        >
          <FaPlus className="text-3xl mr-3" />
          <span className="text-lg font-semibold">Create New Product</span>
        </Link>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {data?.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </motion.div>
    </div>
  );
};
