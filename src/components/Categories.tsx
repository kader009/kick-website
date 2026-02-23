'use client';

import { useState } from 'react';
import { useCategoryQuery } from '../redux/api/endApi';
import { Category } from '@/src/types/categoryType';

export default function Categories() {
  const {
    data: categoryData,
    isLoading,
    isError,
  } = useCategoryQuery(undefined);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter categories and determine visible ones (showing 2 at a time)
  const allCategories: Category[] = categoryData || [];
  const visibleCategories = allCategories.slice(currentIndex, currentIndex + 2);

  const handleNext = () => {
    if (currentIndex + 2 < allCategories.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-[#232321] text-white py-16 md:py-24 text-center">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-64 bg-gray-700 rounded mb-4"></div>
          <div className="text-xl">Loading categories...</div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-[#232321] text-white py-16 text-center">
        <p className="text-xl text-red-400">
          Failed to load categories. Please try again later.
        </p>
      </div>
    );
  }

  if (allCategories.length === 0) {
    return (
      <div className="bg-[#232321] text-white py-16 text-center">
        <p className="text-xl">No categories available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="bg-[#232321] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="flex justify-between items-center py-10">
          <h1 className="text-[24px] md:text-[74px] font-semibold uppercase tracking-tighter">
            CATEGORIES
          </h1>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-colors ${
                currentIndex === 0
                  ? 'bg-gray-700 cursor-not-allowed text-gray-400'
                  : 'bg-gray-500 hover:bg-gray-400 text-white cursor-pointer'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex + 2 >= allCategories.length}
              className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center transition-colors ${
                currentIndex + 2 >= allCategories.length
                  ? 'bg-gray-700 cursor-not-allowed text-gray-400'
                  : 'bg-white text-black hover:bg-gray-200 cursor-pointer'
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full Width Grid touching right edge on desktop, with right and bottom gaps on mobile */}
      <div className="pl-4 sm:pl-6 lg:pl-16 pr-4 md:pr-0 pb-10 md:pb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-0">
          {visibleCategories.map((category: Category, index: number) => (
            <div
              key={category.id}
              className={`py-12 px-8 flex flex-col justify-between group cursor-pointer h-[400px] md:h-[600px] relative transition-all duration-300
                ${index === 0 ? 'bg-[#ECEEF0] rounded-tl-[64px]' : 'bg-[#F6F6F6]'}
              `}
            >
              {/* Product Image */}
              <div className="flex-1 flex items-center justify-center mb-6 z-10 w-full overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full max-w-[450px] object-contain group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Content */}
              <div className="flex justify-between items-end z-10">
                <h3 className="text-[#232321] text-2xl md:text-[32px] font-bold uppercase leading-[1.1] tracking-tight max-w-[180px]">
                  {category.name}
                </h3>

                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#232321] rounded-lg flex items-center justify-center group-hover:bg-[#4A69E2] transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
