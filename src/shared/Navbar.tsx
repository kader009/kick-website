'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../components/ui/Container';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store/store';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Container>
      <nav className="sticky top-0 z-50 bg-[#FAFAFA] mt-[32px] rounded-[24px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 relative">
            {/* Hamburger (Mobile Only - Left) */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Menu Items (Desktop - Left) */}
            <div className="hidden md:flex space-x-8 font-semibold text-gray-800">
              <Link href="#" className="hover:text-blue-600 transition">
                New Drops 🔥
              </Link>
              <Link
                href="#"
                className="hover:text-blue-600 transition flex items-center gap-1"
              >
                Men
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 16l-6-6h12z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="hover:text-blue-600 transition flex items-center gap-1"
              >
                Women
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 16l-6-6h12z" />
                </svg>
              </Link>
            </div>

            {/* Logo (Center) */}
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <Link
                href="/"
                className="text-4xl font-extrabold tracking-tighter text-black"
              >
                <Image src="/Logo.png" alt="Logo" width={128} height={32} />
              </Link>
            </div>

            {/* Icons (Right) */}
            <div className="flex items-center space-x-4 md:space-x-6">
              {/* Search Icon - Hidden on Mobile */}
              <button className="text-gray-800 hover:text-blue-600 transition hidden md:block">
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

              {/* User Icon - Visible on All */}
              <button className="text-gray-800 hover:text-blue-600 transition">
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

              {/* Cart Icon/Counter - Visible on All */}
              <Link
                href="/cart"
                className="text-gray-800 hover:text-blue-600 transition relative"
              >
                <span className="bg-[#FFA52F] text-black text-[16px] font-bold w-[32px] h-[32px] rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu (Drawer) */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'max-h-64 pb-6' : 'max-h-0'
            }`}
          >
            <div className="flex flex-col space-y-4 font-semibold text-gray-800 px-2 mt-2">
              <Link
                href="#"
                className="hover:text-blue-600 transition"
                onClick={() => setIsMenuOpen(false)}
              >
                New Drops 🔥
              </Link>
              <Link
                href="#"
                className="hover:text-blue-600 transition flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                Men
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 16l-6-6h12z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="hover:text-blue-600 transition flex items-center justify-between"
                onClick={() => setIsMenuOpen(false)}
              >
                Women
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 16l-6-6h12z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </Container>
  );
}
