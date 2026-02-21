'use client';

import { useCategoryQuery } from '../redux/api/endApi';

export default function Categories() {
  const { data: categoryData, isLoading } = useCategoryQuery(undefined);

  // Take first 2 categories from API
  const categories = categoryData?.slice(0, 2) || [];

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

  return (
    <div className="bg-[#232321] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <div className="flex justify-between items-center py-10">
          <h2 className="text-[40px] md:text-[74px] font-semibold uppercase tracking-tighter">
            CATEGORIES
          </h2>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button className="w-10 h-10 md:w-12 md:h-12 bg-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-400 transition-colors">
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
            <button className="w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
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

      {/* Full Width Grid touching right edge */}
      <div className="pl-4 sm:pl-6 lg:pl-16">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          {categories.map((category: any, index: number) => (
            <div
              key={category.id}
              className={`bg-[#F4F5F7] py-12 px-8 flex flex-col justify-between group cursor-pointer h-[400px] md:h-[600px] relative transition-all duration-300
                ${index === 0 ? 'rounded-tl-[64px]' : ''}
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
                <h3 className="text-[#232321] text-2xl md:text-[32px] font-bold uppercase leading-[1.1] tracking-tight">
                  {category.name.split(' ').map((word: string, i: number) => (
                    <span key={i} className="block">
                      {word}
                    </span>
                  ))}
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
