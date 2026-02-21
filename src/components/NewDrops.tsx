'use client';

import Image from 'next/image';
import { Product } from '../types/productType';
import Container from './ui/Container';
import { useProductQuery } from '@/src/redux/api/endApi';

export default function NewDrops() {
  const { data: ProductData, isLoading } = useProductQuery(undefined);

  // Filter shoes category and take first 4
  const shoeProducts =
    ProductData?.filter(
      (product: Product) => product.category?.slug === 'shoes',
    )?.slice(4, 8) || [];

  return (
    <Container className="mb-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-10 w-full">
        <h2 className="text-[#232321] text-[74px] md:text-[72px] font-semibold uppercase leading-[0.9] tracking-tighter">
          DON&apos;T MISS OUT
          <br />
          NEW DROPS
        </h2>

        <button className="bg-[#4A69E2] hover:bg-blue-600 text-white font-bold py-3 px-6 md:px-8 rounded-[8px] transition-all text-xs md:text-sm uppercase tracking-wide mt-6 md:mt-0">
          SHOP NEW DROPS
        </button>
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
                    className="w-full h-full object-cover rounded-[24px]"
                    width={302}
                    height={334}
                  />
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col mt-2">
                <h3 className="font-bold text-[#232321] text-[16px] md:text-[20px] leading-[1.2] uppercase mb-4 line-clamp-2">
                  {product.title}
                </h3>

                <button className="w-full bg-[#232321] text-white hover:bg-black font-semibold py-4 rounded-lg uppercase text-xs md:text-[14px] transition-colors">
                  VIEW PRODUCT -{' '}
                  <span className="text-[#FFA52F]">${product.price}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
}
