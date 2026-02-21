'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import { useSingleProductQuery } from '@/src/redux/api/endApi';
import Container from '@/src/components/ui/Container';

export default function ProductDetailsPage() {
  const params = useParams();
  const { data: product, isLoading } = useSingleProductQuery(
    params.id as string,
  );

  if (isLoading) {
    return (
      <Container className="py-20 flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
      </Container>
    );
  }

  if (!product) {
    return (
      <Container className="py-20 flex justify-center items-center min-h-[60vh]">
        <h2 className="text-2xl font-bold">Product not found.</h2>
      </Container>
    );
  }

  return (
    <div className="min-h-screen pb-20">
      <Container className="pt-10">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Side - Image Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 gap-4 rounded-[32px] md:rounded-[48px] overflow-hidden bg-transparent">
              {/* Array of 4 items, using existing images or repeating the first one to make exactly 4 */}
              {Array.from({ length: 4 }).map((_, index) => {
                const imgUrl =
                  product.images?.[index] ||
                  product.images?.[0] ||
                  'https://placehold.co/600x600';
                return (
                  <div
                    key={index}
                    className="bg-[#ECEEF0] w-full flex items-center justify-center aspect-429/510"
                  >
                    <img
                      src={imgUrl}
                      alt={`${product.title} image`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="w-full lg:w-[450px] xl:w-[500px] flex flex-col pt-4">
            {/* New Release Badge */}
            <div className="bg-[#4A69E2] text-white text-xs font-bold px-4 py-2 rounded-lg w-max mb-6">
              New Release
            </div>

            {/* Title & Price */}
            <h1 className="text-[32px] md:text-[40px] font-black uppercase leading-tight text-[#232321] mb-4">
              {product.title}
            </h1>
            <p className="text-[#4A69E2] text-2xl font-bold mb-8">
              ${product.price}.00
            </p>

            {/* Color section (Mocked) */}
            <div className="mb-8">
              <h3 className="font-bold text-sm uppercase mb-3">Color</h3>
              <div className="flex gap-2">
                <div className="w-10 h-10 rounded-full bg-[#1C2638] border-2 border-black flex items-center justify-center cursor-pointer">
                  <div className="w-8 h-8 rounded-full bg-[#1C2638] border border-white"></div>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#7C8873] cursor-pointer hover:opacity-80 transition-opacity"></div>
              </div>
            </div>

            {/* Size section (Mocked) */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-3">
                <h3 className="font-bold text-sm uppercase">Size</h3>
                <span className="text-xs font-bold underline cursor-pointer hover:text-[#4A69E2]">
                  SIZE CHART
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[
                  '38',
                  '39',
                  '40',
                  '41',
                  '42',
                  '43',
                  '44',
                  '45',
                  '46',
                  '47',
                ].map((size) => (
                  <button
                    key={size}
                    className={`h-12 rounded-lg font-bold text-sm transition-colors ${
                      size === '38'
                        ? 'bg-[#232321] text-white'
                        : 'bg-white text-gray-500 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-4">
              <button className="flex-1 bg-[#232321] text-white hover:bg-black font-semibold py-4 rounded-xl uppercase text-sm transition-colors">
                ADD TO CART
              </button>
              <button className="w-14 h-14 bg-[#232321] text-white hover:bg-black rounded-xl flex items-center justify-center transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </button>
            </div>
            <button className="w-full bg-[#4A69E2] text-white hover:bg-blue-600 font-semibold py-4 rounded-xl uppercase text-sm transition-colors mb-10 shadow-lg">
              BUY IT NOW
            </button>

            {/* About Product */}
            <div>
              <h3 className="font-bold text-sm uppercase mb-2">
                ABOUT THE PRODUCT
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Shadow Navy / Army Green
              </p>

              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {product.description ||
                  'This product is excluded from all promotional discounts and offers.'}
              </p>

              <ul className="text-sm text-gray-600 list-disc pl-5 space-y-2">
                <li>
                  Pay over time in interest-free installments with Affirm,
                  Klarna or Afterpay.
                </li>
                <li>
                  Join adiClub to get unlimited free standard shipping, returns,
                  & exchanges.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
