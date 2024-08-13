import React from 'react';
import { IoExit } from "react-icons/io5";

export const Home = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg animate-fadeIn-">
      <header>
        <div className="w-[calc(100%-60px)] h-20 shadow-lg  py-3 px-12 flex items-center justify-between ml-7 rounded-xl">
          <div>
            <h1 className="font-poppins font-extrabold text-xl text-gray-900">Товары</h1>
            <p className="font-mulish font-bold text-sm text-gray-400 mt-1">
              <a href="#" className="text-gray-900 hover:text-green-500">Главная</a> / 
              <a href="#" className="text-gray-900 hover:text-green-500 ml-1">Товары</a>
            </p>
          </div>
          <a className="flex items-center gap-1 font-poppins font-bold text-sm text-gray-900 bg-gray-100 py-2 px-4 rounded-lg hover:bg-green-500 hover:text-white transition-all duration-300" href="/login">
            <IoExit /> EXIT
          </a>
        </div>
      </header>
      <main>
        <section className="flex justify-center items-center">
          <div className="  rounded-xl p-8 m-8 text-center w-full h-screen">
            <h1 className="font-mulish font-extrabold text-xl text-gray-900 mb-5">Вы пока не создали ни одного товара</h1>
            <div className="flex flex-col items-center">
              <img className="ml-10" src="./public/not_shop.svg" alt="_black" />
              <a className="inline-block mt-6 py-3 px-6 font-poppins font-extrabold text-white bg-green-500 rounded-lg hover:bg-aqua hover:text-gray-900 transition-all duration-300" href="/create-product">Создать первый товар</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
