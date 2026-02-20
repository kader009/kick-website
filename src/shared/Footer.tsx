import Container from '@/src/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="mt-16">
      <Container>
        {/* CTA Banner */}
        <div className="bg-[#4A69E2] rounded-[32px] px-8 py-10 md:px-16 md:py-14 flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden z-10 h-[545px]">
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-3xl md:text-[48px] font-black uppercase leading-none tracking-tight">
              JOIN OUR KICKSPLUS
              <br />
              CLUB &amp; GET 15% OFF
            </h2>
            <p className="text-white/80 text-sm md:text-base">
              Sign up for free! Join the community.
            </p>
            <div className="flex gap-1 mt-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/20 text-white placeholder-white/60 px-5 py-3 rounded-xl outline-none text-sm w-[220px] md:w-[280px] border border-white/30 focus:border-white transition"
              />
              <button className="bg-[#232321] hover:bg-black text-white font-bold px-6 py-3 rounded-xl text-sm uppercase tracking-wide transition-colors">
                SUBMIT
              </button>
            </div>
          </div>
          <span className="text-white text-6xl md:text-[120px] font-black tracking-tighter">
            KICKS
          </span>
        </div>

        {/* Dark Footer Section */}
        <div className="bg-[#232321] rounded-[32px] mt-[-100px] pt-16 pb-8 px-8 md:px-16 relative z-20">
          {/* Links Section */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-[128px]">
            {/* About Us */}
            <div className="flex flex-col gap-4 w-[446px]">
              <h3 className="text-[#FFA52F] font-bold text-lg">About us</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We are the biggest hyperstore in the universe. <br /> We got you
                all cover with our exclusive <br /> collections and latest
                drops.
              </p>
            </div>

            {/* Categories, Company, Follow Us */}
            <div className="flex flex-col sm:flex-row gap-10 md:gap-[128px]">
              {/* Categories */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[#FFA52F] font-bold text-lg">Categories</h3>
                <ul className="flex flex-col gap-2">
                  {[
                    'Runners',
                    'Sneakers',
                    'Basketball',
                    'Outdoor',
                    'Golf',
                    'Hiking',
                  ].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-gray-400 text-sm hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[#FFA52F] font-bold text-lg">Company</h3>
                <ul className="flex flex-col gap-2">
                  {['About', 'Contact', 'Blogs'].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-gray-400 text-sm hover:text-white transition-colors"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow Us */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[#FFA52F] font-bold text-lg">Follow us</h3>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-white hover:text-[#FFA52F] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-[#FFA52F] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-[#FFA52F] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    className="text-white hover:text-[#FFA52F] transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Giant KICKS Logo - only top half visible */}
          <div className="mt-8 w-full overflow-hidden h-[80px] md:h-[150px] z-20">
            <Image
              src="/logo.png"
              alt="KICKS"
              width={1262}
              height={313}
              className="w-full object-cover object-top brightness-0 invert"
            />
          </div>
        </div>
      </Container>

      {/* Copyright - outside container, at very bottom */}
      <div className="text-center py-6">
        <p className="text-gray-500 text-xs">&copy; All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
