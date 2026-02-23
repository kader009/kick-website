'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/productType';
import Container from './ui/Container';
import { useProductQuery } from '@/src/redux/api/endApi';

export default function YouMayAlsoLike() {
  const { data: ProductData, isLoading, isError } = useProductQuery(undefined);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter shoes category
  const allShoes =
    ProductData?.filter(
      (product: Product) => product.category?.slug === 'shoes',
    ) || [];

  // Determine items to show per page (Desktop: 4, Mobile: 2)
  // For simplicity since it's a grid, we'll just slice based on currentIndex
  const visibleProducts = allShoes.slice(currentIndex, currentIndex + 4);

  const handleNext = () => {
    if (currentIndex + 4 < allShoes.length) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <Container className="mb-8">
      <div className="flex flex-row justify-between items-center mb-8 md:mb-10 w-full">
        <h1 className="text-[#232321] text-[24px] md:text-[48px] font-semibold leading-none tracking-tighter uppercase dark:text-white">
          You may also like
        </h1>

        <div className="flex gap-2 shrink-0">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous Products"
            className={`w-10 h-10 md:w-12 md:h-12 rounded-[8px] flex items-center justify-center transition-colors ${
              currentIndex === 0
                ? 'bg-gray-200 cursor-not-allowed'
                : 'bg-gray-400 hover:bg-gray-500 cursor-pointer'
            }`}
          >
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
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex + 4 >= allShoes.length}
            aria-label="Next Products"
            className={`w-10 h-10 md:w-12 md:h-12 rounded-[8px] flex items-center justify-center transition-colors ${
              currentIndex + 4 >= allShoes.length
                ? 'bg-gray-200 cursor-not-allowed'
                : 'bg-[#232321] text-white hover:bg-black cursor-pointer'
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

      {isLoading ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square bg-gray-200 rounded-[24px] mb-4"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-12 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      ) : isError ? (
        <div className="py-10 text-center w-full">
          <p className="text-xl text-red-500 font-semibold">
            Failed to load recommendations.
          </p>
        </div>
      ) : visibleProducts.length === 0 ? (
        <div className="py-10 text-center w-full">
          <p className="text-xl text-[#232321] font-semibold">
            No similar products found.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 w-full">
          {visibleProducts.map((product: Product) => (
            <div key={product.id} className="flex flex-col flex-1 group">
              <div className="relative aspect-square bg-[#F4F5F7] rounded-[24px] overflow-hidden mb-4 p-4 flex items-center justify-center">
                {/* Product Image */}
                <div className="w-full h-full relative flex items-center justify-center rounded-[24px] p-[4px]">
                  {/* "New" Badge */}
                  <div className="absolute top-1 left-1 bg-[#4A69E2] text-white text-[10px] md:text-xs font-bold px-4 py-2 flex items-center justify-center rounded-tl-[16px] rounded-br-[16px] z-10">
                    New
                  </div>
                  <Image
                    src={product?.images?.[0] || ''}
                    alt={product?.title}
                    unoptimized
                    className="w-full h-full object-cover rounded-[24px]"
                    width={302}
                    height={334}
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col mt-2">
                <h3 className="font-bold text-[#232321] text-[16px] md:text-[20px] leading-[1.2] uppercase mb-4 line-clamp-2 dark:text-white">
                  {product.title}
                </h3>

                <Link
                  href={`/product/${product.id}`}
                  className="w-full bg-[#232321] text-white hover:bg-black font-semibold py-4 rounded-lg uppercase text-xs md:text-[14px] transition-colors flex items-center justify-center gap-1"
                >
                  VIEW PRODUCT -{' '}
                  <span className="text-[#FFA52F]">${product.price}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination indicators bottom - Always showing 4 dots and looping the active one */}
      <div className="flex justify-center gap-2 mt-12 w-full">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className={`w-8 h-[4px] rounded-full transition-colors ${
              currentIndex % 4 === i ? 'bg-[#4A69E2]' : 'bg-[#232321]'
            }`}
          ></div>
        ))}
      </div>
    </Container>
  );
}
