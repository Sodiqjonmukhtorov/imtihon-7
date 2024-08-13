import React from "react";
import { useForm } from "react-hook-form";
import { AiOutlineTag, AiOutlinePicture } from "react-icons/ai";

export const CreateForm = ({ submit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto mt-10"
    >
      <div className="mb-6 relative">
        <label className="block text-gray-700 font-semibold mb-2 flex items-center" htmlFor="name">
          <AiOutlineTag className="text-xl mr-2" /> Category Name
        </label>
        <input
          id="name"
          placeholder="Name"
          className="w-full p-4 border border-gray-300 rounded-md bg-gray-50 text-gray-700 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300 ease-in-out"
          type="text"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-6 relative">
        <label className="block text-gray-700 font-semibold mb-2 flex items-center" htmlFor="img">
          <AiOutlinePicture className="text-xl mr-2" /> Image URL
        </label>
        <input
          id="img"
          placeholder="Image URL"
          className="w-full p-4 border border-gray-300 rounded-md bg-gray-50 text-gray-700 placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition duration-300 ease-in-out"
          type="text"
          {...register("img", { required: true })}
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 text-center text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300 transform hover:scale-105"
      >
        Create
      </button>
    </form>
  );
};
