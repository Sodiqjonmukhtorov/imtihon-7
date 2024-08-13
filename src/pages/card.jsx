import React from 'react';
import { IoExit } from "react-icons/io5";
import { FaCreditCard, FaCalendarAlt, FaLock } from "react-icons/fa";

export const Card = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("To'lov muvaffaqiyatli amalga oshirildi!");
  };

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

      <main className="flex justify-center items-center mt-8">
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">To'lov ma'lumotlari</h2>
          <div className="mb-4 flex items-center">
            <FaCreditCard className="text-3xl text-gray-700 mr-3" />
            <div className="w-full">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="cardNumber">Karta raqami</label>
              <input
                id="cardNumber"
                type="text"
                className="w-full p-3 border-2 border-gray-300 focus:border-green-500 focus:outline-none rounded-md transition duration-300 ease-in-out"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <FaCalendarAlt className="text-3xl text-gray-700 mr-3" />
            <div className="w-full">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="expiryDate">Muddati</label>
              <input
                id="expiryDate"
                type="text"
                className="w-full p-3 border-2 border-gray-300 focus:border-green-500 focus:outline-none rounded-md transition duration-300 ease-in-out"
                placeholder="MM/YY"
                required
              />
            </div>
          </div>
          <div className="mb-4 flex items-center">
            <FaLock className="text-3xl text-gray-700 mr-3" />
            <div className="w-full">
              <label className="block text-gray-700 font-semibold mb-2" htmlFor="cvv">CVV</label>
              <input
                id="cvv"
                type="text"
                className="w-full p-3 border-2 border-gray-300 focus:border-green-500 focus:outline-none rounded-md transition duration-300 ease-in-out"
                placeholder="123"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="cardHolderName">Karta egasining ismi</label>
            <input
              id="cardHolderName"
              type="text"
              className="w-full p-3 border-2 border-gray-300 focus:border-green-500 focus:outline-none rounded-md transition duration-300 ease-in-out"
              placeholder="Ismingiz"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
          >
            To'lovni amalga oshirish
          </button>
        </form>
      </main>
    </div>
  );
};
