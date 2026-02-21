'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '../types/productType';
import Container from './ui/Container';
import { useProductQuery } from '@/src/redux/api/endApi';

export default function YouMayAlsoLike() {
  const { data: ProductData, isLoading } = useProductQuery(undefined);

  // Filter shoes category and take first 4 (using a different slice or the same for mock purposes)
  const shoeProducts =
    ProductData?.filter(
      (product: Product) => product.category?.slug === 'shoes',
    )?.slice(4, 8) || [];

  return (
    <Container className="mb-20 mt-32">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-10 w-full">
        <h2 className="text-[#232321] text-[40px] md:text-[56px] font-black leading-none tracking-tighter">
          You may also like
        </h2>

        <div className="flex gap-2 mt-6 md:mt-0">
          <button className="w-10 h-10 md:w-12 md:h-12 bg-gray-400 rounded-lg flex items-center justify-center hover:bg-gray-500 transition-colors">
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
          <button className="w-10 h-10 md:w-12 md:h-12 bg-[#232321] text-white rounded-lg flex items-center justify-center hover:bg-black transition-colors">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-square bg-gray-200 rounded-[24px] mb-4"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-12 bg-gray-200 rounded-lg"></div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {shoeProducts.map((product: Product) => (
            <div key={product.id} className="flex flex-col flex-1 group">
              <div className="relative aspect-square bg-white border-2 border-transparent hover:border-gray-100 rounded-[24px] overflow-hidden mb-4 p-4 flex items-center justify-center transition-all">
                {/* Product Image */}
                <div className="w-full h-full relative flex items-center justify-center rounded-[24px] p-[4px]">
                  {/* "New" Badge */}
                  <div className="absolute top-1 left-1 bg-[#4A69E2] text-white text-[10px] md:text-xs font-bold px-4 py-2 flex items-center justify-center rounded-tl-[16px] rounded-br-[16px] z-10">
                    New
                  </div>
                  <Image
                    src={product?.images?.[0] || ''}
                    alt={product?.title}
                    className="w-full h-full object-cover rounded-[24px]"
                    width={302}
                    height={334}
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col mt-2">
                <h3 className="font-bold text-[#232321] text-[16px] md:text-[18px] leading-[1.2] uppercase mb-4 line-clamp-2">
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

      {/* Pagination indicators bottom */}
      <div className="flex justify-center gap-2 mt-12 w-full">
        <div className="w-8 h-[4px] bg-[#4A69E2] rounded-full"></div>
        <div className="w-8 h-[4px] bg-gray-300 rounded-full"></div>
        <div className="w-8 h-[4px] bg-gray-300 rounded-full"></div>
        <div className="w-8 h-[4px] bg-gray-300 rounded-full"></div>
      </div>
    </Container>
  );
}
