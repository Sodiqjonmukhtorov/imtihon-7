import React from 'react';
import { IoExit } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";

export const Accaunt = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="w-full bg-white shadow-lg py-4 px-8 flex items-center justify-between rounded-b-lg">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900">Товары</h1>
          <p className="text-sm font-medium text-gray-500 mt-1">
            <a href="/" className="text-gray-900 hover:text-green-500 transition-colors">Главная</a> / 
            <a href="/category-list" className="text-gray-900 hover:text-green-500 ml-1 transition-colors">Товары</a>
          </p>
        </div>
        <a
          className="flex items-center gap-2 text-sm font-semibold text-gray-900 bg-gray-200 hover:bg-green-500 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg shadow-sm hover:shadow-md"
          href="/login"
        >
          <IoExit className="text-xl" /> EXIT
        </a>
      </header>

      <section className="w-full bg-white mt-8 p-8 rounded-lg shadow-lg">
        <div className="flex flex-col items-center">
          <img
            src="./public/Sodiqjon.jpg"
            alt="Developer"
            className="w-32 h-32 rounded-full shadow-lg"
          />
          <h2 className="text-3xl font-bold text-gray-900 mt-4">Sodiqjon Mukhtorov</h2>
          <p className="text-gray-600 mt-2 text-center">
            Full-Stack Developer with a passion for building web applications. 
            Experienced in React, Vite, and MongoDB. Dedicated to creating 
            user-friendly and efficient software solutions.
          </p>
        </div>

        <div className="flex justify-center mt-6 gap-4">
          <a href="https://github.com/Sodiqjonmukhtorov" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-green-500 transition-colors text-3xl">
            <FaGithub />
          </a>
          <a href="https://youtube-api-js.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-green-500 transition-colors text-3xl">
          <FaYoutube />
          </a>
          <a href="https://t.me/sodiqjon_lutfullayevich" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-green-500 transition-colors text-3xl">
          <FaTelegram />
          </a>
        </div>
      </section>
    </div>
  );
};
