'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { useSingleProductQuery } from '@/src/redux/api/endApi';
import Container from '@/src/components/ui/Container';
import YouMayAlsoLike from '@/src/components/YouMayAlsoLike';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/src/redux/features/cartSlice';
import toast from 'react-hot-toast';

export default function ProductDetailsPage() {
  const params = useParams();
  const dispatch = useDispatch();
  const { data: product, isLoading } = useSingleProductQuery(
    params.id as string,
  );

  const [selectedSize, setSelectedSize] = useState('38');
  const [selectedColor, setSelectedColor] = useState(
    'Shadow Navy / Army Green',
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        title: product.title,
        description: product.description || '',
        price: product.price,
        image: product.images?.[0] || '',
        color: selectedColor,
        size: selectedSize,
        quantity: 1,
      }),
    );
    toast.success('Successfully added to bag!', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <div className="min-h-screen">
      <Container className="pt-[32px] mb-[24px] md:mb-[128px]">
        <div className="flex flex-col lg:flex-row gap-[16px]">
          {/* Left Side - Image Gallery */}
          <div className="flex-1">
            {/* Desktop View - 2x2 Grid (Visible on md and up) */}
            <div className="hidden md:grid grid-cols-2 gap-4 rounded-[48px] overflow-hidden bg-transparent">
              {Array.from({ length: 4 }).map((_, index) => {
                const imgUrl =
                  product?.images?.[index] ||
                  product?.images?.[0] ||
                  'https://placehold.co/600x600';
                return (
                  <div
                    key={index}
                    className="w-full flex items-center justify-center aspect-429/510 rounded-[16px] overflow-hidden"
                  >
                    <Image
                      width={429}
                      height={510}
                      src={imgUrl}
                      unoptimized
                      alt={`${product.title} image`}
                      className="w-full h-full object-cover rounded-[16px]"
                    />
                  </div>
                );
              })}
            </div>

            {/* Mobile View - Slider style (Visible on small devices) */}
            <div className="md:hidden flex flex-col gap-4">
              {/* Main Image Container */}
              <div className="w-full max-w-[358px] aspect-358/273 mx-auto rounded-[16px] overflow-hidden relative">
                <Image
                  width={358}
                  height={273}
                  src={
                    product?.images?.[activeImageIndex] ||
                    product?.images?.[0] ||
                    ''
                  }
                  unoptimized
                  alt={`${product.title} main image`}
                  className="w-full h-full object-contain rounded-[16px]"
                />

                {/* Pagination Dots - Positioned 14px from bottom */}
                <div className="absolute bottom-[14px] left-1/2 -translate-x-1/2 flex gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        activeImageIndex === i ? 'bg-[#4A69E2]' : 'bg-[#BCBCBC]'
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Thumbnails Row */}
              <div className="flex justify-start gap-4 px-2 mt-2 mb-[24px]">
                {Array.from({ length: 4 }).map((_, index) => {
                  const imgUrl =
                    product?.images?.[index] || product?.images?.[0] || '';
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveImageIndex(index)}
                      className={`w-[64px] h-[64px] rounded-[8px] flex items-center justify-center cursor-pointer transition-all ${
                        activeImageIndex === index
                          ? 'scale-105'
                          : 'opacity-100 hover:scale-105'
                      }`}
                    >
                      <Image
                        width={64}
                        height={64}
                        src={imgUrl}
                        unoptimized
                        alt={`thumb ${index}`}
                        className="w-full h-full object-contain rounded-[8px]"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Details */}
          <div className="w-full lg:w-[450px] xl:w-[500px] flex flex-col">
            {/* New Release Badge */}
            <div className="bg-[#4A69E2] text-white text-[12px] font-semibold px-4 py-2 rounded-[12px] w-max mb-[16px]">
              New Release
            </div>

            {/* Title & Price */}
            <h1 className="text-[20px] md:text-[32px] font-semibold uppercase leading-tight text-[#232321] mb-[16px] dark:text-white">
              {product.title}
            </h1>
            <p className="text-[#4A69E2] text-[24px] font-semibold mb-[16px]">
              ${product.price}.00
            </p>

            {/* Color section */}
            <div className="mb-[16px]">
              <h3 className="font-semibold text-[16px] uppercase mb-[16px]">
                Color
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedColor('Shadow Navy / Army Green')}
                  className={`w-10 h-10 rounded-full bg-[#1C2638] flex items-center justify-center cursor-pointer transition-all ${selectedColor === 'Shadow Navy / Army Green' ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                >
                  <div className="w-8 h-8 rounded-full bg-[#1C2638] border border-white/20"></div>
                </button>
                <button
                  onClick={() => setSelectedColor('Army Green')}
                  className={`w-10 h-10 rounded-full bg-[#7C8873] cursor-pointer transition-all ${selectedColor === 'Army Green' ? 'ring-2 ring-offset-2 ring-black' : ''}`}
                ></button>
              </div>
            </div>

            {/* Size section */}
            <div className="mb-[16px]">
              <div className="flex justify-between items-end mb-[16px]">
                <h3 className="font-semibold text-[16px] uppercase">Size</h3>
                <span className="text-[16px] font-semibold underline cursor-pointer hover:text-[#4A69E2]">
                  SIZE CHART
                </span>
              </div>
              <div className="grid grid-cols-5 gap-[4px] mb-[32px]">
                {['38', '39', '40', '41', '42', '43', '44', '45'].map(
                  (size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-12 rounded-lg font-bold text-sm transition-colors cursor-pointer ${
                        selectedSize === size
                          ? 'bg-[#232321] text-white'
                          : size === '39' || size === '40'
                            ? 'bg-[#D2D1D3] text-gray-500'
                            : 'bg-white text-gray-500 hover:bg-gray-200'
                      }`}
                    >
                      {size}
                    </button>
                  ),
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-[#232321] text-white hover:bg-black font-medium py-4 rounded-[8px] uppercase text-[14px] transition-colors cursor-pointer"
              >
                ADD TO CART
              </button>
              <button className="w-14 h-14 bg-[#232321] text-white hover:bg-black rounded-[8px] flex items-center justify-center transition-colors cursor-pointer">
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
            <Link
              href="/cart"
              className="w-full flex items-center justify-center bg-[#4A69E2] text-white hover:bg-blue-600 font-medium py-4 rounded-[8px] uppercase text-[14px] transition-colors mb-[32px] cursor-pointer"
            >
              BUY IT NOW
            </Link>

            {/* About Product */}
            <div>
              <h3 className="font-semibold text-[16px] uppercase mb-[8px]">
                ABOUT THE PRODUCT
              </h3>
              <p className="text-sm text-[#232321] mb-4 dark:text-white">{selectedColor}</p>

              <p className="text-[#232321] text-[16px] mb-4 leading-relaxed dark:text-white">
                {product.description ||
                  'This product is excluded from all promotional discounts and offers.'}
              </p>

              <ul className="text-[16px] text-[#232321] list-disc pl-5 space-y-2 dark:text-white">
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

      {/* Recommended products below details */}
      <YouMayAlsoLike />
    </div>
  );
}
