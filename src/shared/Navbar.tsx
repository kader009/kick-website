'use client';

import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/ui/Container';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Container>
      <nav className="sticky top-0 z-50 bg-[#FAFAFA] mt-[32px] rounded-[24px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Menu Items (Left) */}
            <div className="hidden md:flex space-x-8 font-semibold text-gray-800">
              <Link href="#" className="hover:text-blue-600 transition">
                New Drops 🔥
              </Link>
              <Link href="#" className="hover:text-blue-600 transition">
                Men
              </Link>
              <Link href="#" className="hover:text-blue-600 transition">
                Women
              </Link>
            </div>

            {/* Logo (Center) */}
            <div className="shrink-0 flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
              <Link
                href="/"
                className="text-4xl font-extrabold tracking-tighter text-black"
              >
                <Image src="/logo.png" alt="Logo" width={128} height={32} />
              </Link>
            </div>

            {/* Icons (Right) */}
            <div className="flex items-center space-x-6">
              <button className="text-gray-800 hover:text-blue-600 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button className="text-gray-800 hover:text-blue-600 transition hidden sm:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </button>
              <Link
                href="/cart"
                className="text-gray-800 hover:text-blue-600 transition relative"
              >
                <span className="bg-[#FFA52F] text-white text-[10px] font-bold w-[32px] h-[32px] rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
}
