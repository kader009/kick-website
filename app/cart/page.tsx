'use client';

import Link from 'next/link';
import Image from 'next/image';
import Container from '@/src/components/ui/Container';
import YouMayAlsoLike from '@/src/components/YouMayAlsoLike';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/src/redux/store/store';
import { removeFromCart, updateQuantity } from '@/src/redux/features/cartSlice';
import toast from 'react-hot-toast';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemove = (id: number, size: string, color: string) => {
    dispatch(removeFromCart({ id, size, color }));
    toast.error('Item removed from bag', {
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  const handleUpdateQty = (
    id: number,
    size: string,
    color: string,
    quantity: number,
  ) => {
    dispatch(updateQuantity({ id, size, color, quantity }));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const delivery = cartItems.length > 0 ? 6.99 : 0;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen mt-[32px]">
      <Container>
        {/* Banner Section */}
        <div className="mb-10">
          <h2 className="text-[32px] font-semibold text-[#232321] mb-2">
            Saving to celebrate
          </h2>
          <p className={`${openSans.className} text-[#232321] text-[14px] w-[782px] font-semibold`}>
            Enjoy up to 60% off thousands of styles during the End of Year sale
            - while supplies last. No code needed.
          </p>
          <div className="flex gap-2 mt-2 text-sm">
            <Link href="#" className={`${openSans.className} font-semibold underline decoration-1 underline-offset-2 text-[16px]`}>
              Join us
            </Link>
            <span>or</span>
            <Link href="#" className={`${openSans.className} font-semibold underline decoration-1 underline-offset-2 text-[16px]`}>
              Sign-in
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Side - Your Bag */}
          <div className="flex-1">
            <div className="bg-white rounded-[24px] p-8">
              <h1 className="text-[32px] font-semibold text-[#232321] mb-2 capitalize">
                Your Bag
              </h1>
              <p className={`${openSans.className} text-[#232321] text-[16px] mb-8 font-normal`}>
                Items in your bag not reserved- check out now to make them
                yours.
              </p>

              {cartItems.length === 0 ? (
                <div className="py-10 text-center">
                  <p className="text-[#232321] font-medium mb-6">
                    Your bag is empty.
                  </p>
                  <Link
                    href="/"
                    className="bg-[#4A69E2] text-white px-8 py-3 rounded-[8px] font-semibold capitalize transition-all"
                  >
                    Start Shopping
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col gap-8">
                  {cartItems.map((item, index) => (
                    <div
                      key={`${item.id}-${item.size}-${item.color}`}
                      className="flex flex-col md:flex-row gap-6 border-b border-gray-100 pb-8 last:border-0 last:pb-0"
                    >
                      {/* Product Image */}
                      <div className="w-full md:w-[200px] aspect-square bg-[#ECEEF0] rounded-[24px] overflow-hidden shrink-0 flex items-center justify-center relative">
                        <Image
                          src={item.image}
                          alt={item.title}
                          unoptimized
                          className="object-cover"
                          width={207}
                          height={225}
                        />
                      </div>

                      {/* Info & Controls */}
                      <div className="flex-1 flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-[#232321] uppercase leading-tight mb-2">
                              {item.title}
                            </h3>
                            <p className={`${openSans.className} text-[#232321] font-semibold mb-2 line-clamp-1 text-[20px]`}>
                              {item.description}
                            </p>
                            <p className={`${openSans.className} text-[#232321] font-semibold`}>
                              {item.color}
                            </p>
                          </div>
                          <span className="text-xl font-bold text-[#4A69E2]">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-6">
                          {/* Size Selector Mock */}
                          <div className="flex items-center gap-2">
                            <span
                              className={`${openSans.className} text-[#232321] font-semibold text-[20px]`}
                            >
                              Size {item.size}
                            </span>
                            <button className="text-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </button>
                          </div>
                          {/* Quantity Selector Mock */}
                          <div className="flex items-center gap-2">
                            <span
                              className={`${openSans.className} text-[#232321] font-semibold text-[20px]`}
                            >
                              Quantity {item.quantity}
                            </span>
                            <button className="text-gray-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="m6 9 6 6 6-6" />
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="flex gap-4 mt-8">
                          <button className="text-gray-400 hover:text-black transition-colors">
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
                          <button
                            onClick={() =>
                              handleRemove(item.id, item.size, item.color)
                            }
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
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
                              className="p-[2px] border-2 border-current rounded-md"
                            >
                              <path d="M18 6 6 18" />
                              <path d="m6 6 12 12" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Order Summary */}
          <div className="w-full lg:w-[400px]">
            <h2 className="text-[32px] font-semibold text-[#232321] mb-[16px]">
              Order Summary
            </h2>

            <div className="space-y-4 mb-1">
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[20px] uppercase">
                  {cartItems.reduce((acc, obj) => acc + obj.quantity, 0)} ITEM
                  {cartItems.length !== 1 ? 'S' : ''}
                </span>
                <span className="font-semibold text-[20px]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-lg">
                <span className="font-semibold text-[20px]">Delivery</span>
                <span className="font-semibold text-[20px]">${delivery.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-[20px]">Sales Tax</span>
                <span className="font-semibold text-[20px]">-</span>
              </div>
              <div className="flex justify-between items-center text-xl pt-1">
                <span className="font-semibold text-[24px] uppercase">Total</span>
                <span className="font-semibold text-[24px]">${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-[#232321] text-white hover:bg-black font-medium py-[16px] rounded-[8px] uppercase text-[14px] tracking-widest transition-all mb-[8px]">
              CHECKOUT
            </button>

            <Link
              href="#"
              className={`${openSans.className} font-semibold underline decoration-1 underline-offset-2 text-[16px]`}
            >
              Use a promo code
            </Link>
          </div>
        </div>
      </Container>

      <div className="mt-32">
        <YouMayAlsoLike />
      </div>
    </div>
  );
}
