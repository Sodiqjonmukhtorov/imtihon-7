import React from "react";
import { IoSearch } from "react-icons/io5";
import { useDebounce } from "../../hooks/use-Debounce";
import { useSearch } from "../Search/Service/Query/use-Search";
import { CategoryCard } from "../category-card";

export const Search = () => {
  const [inputValue, setValue] = React.useState("");
  const debouncedValue = useDebounce(inputValue);
  const { data } = useSearch(debouncedValue);

  return (
    <div className="relative mx-auto mt-10 flex w-full max-w-4xl flex-col items-center">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <IoSearch className=" cursor- text-2xl text-purple-700 transition-transform duration-300 ease-in-out hover:scale-125 hover:text-pink-500" />
        </div>
        <input
          onChange={(e) => setValue(e.target.value)}
          placeholder="Search..."
          className="w-full rounded-xl border border-purple-300 bg-purple-50 p-4 pl-12 text-sm text-purple-800 shadow-lg outline-none transition-all duration-300 ease-in-out focus:ring-4 focus:ring-pink-300 focus:bg-white focus:border-pink-500"
          type="text"
        />
      </div>
      {inputValue.length >= 3 && (
        <div className="absolute left-1/2 top-full z-10 mt-5 w-[900px] -translate-x-1/2 transform rounded-2xl bg-white shadow-lg transition-transform duration-300 ease-in-out animate-slideInUp">
          <div className="p-4">
            {data?.length ? (
              data.map((item) => (
                <CategoryCard key={item.id} {...item} />
              ))
            ) : (
              <p className="text-center text-purple-700">No results found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
