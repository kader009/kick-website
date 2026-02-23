import Container from '@/src/components/ui/Container';
import Image from 'next/image';
import Link from 'next/link';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
});

const Footer = () => {
  return (
    <footer>
      <Container>
        {/* CTA Banner */}
        <div className="bg-[#4A69E2] rounded-[48px] px-8 md:px-24 flex flex-col md:flex-row justify-around items-start md:items-center gap-6 md:gap-[100px] relative overflow-hidden z-10 pt-12 pb-[120px] md:pt-20 md:pb-[170px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-white text-[32px] md:text-[48px] font-semibold uppercase leading-none tracking-tight text-left">
              JOIN OUR KICKSPLUS
              <br />
              CLUB &amp; GET 15% OFF
            </h1>
            <p className="text-white/80 text-sm md:text-base text-left">
              Sign up for free! Join the community.
            </p>
            <div className="flex justify-start gap-1 mt-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/20 text-white placeholder-white/60 px-5 py-3 rounded-xl outline-none text-sm w-[236px] md:w-[280px] border border-white/30 focus:border-white transition"
              />
              <button className="bg-[#232321] hover:bg-black text-white font-semibold px-6 py-3 rounded-[8px] text-[14px] uppercase tracking-wide transition-colors">
                SUBMIT
              </button>
            </div>
          </div>
          <div className="relative flex items-start">
            <Image
              src="/footer1.svg"
              alt="KICKS"
              width={351}
              height={88}
              className="w-[150px] md:w-[250px] brightness-0 invert"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            <div className="absolute top-[-10px] right-[-26px] md:top-[-20px] md:right-[-35px] bg-[#FFA52F] text-normal w-[26px] h-[26px] flex justify-center items-center rounded-full text-lg md:text-xl font-bold opacity-100 z-10">
              <span className="leading-none mt-[-2px]">+</span>
            </div>
          </div>
        </div>

        {/* Dark Footer Section */}
        <div className="bg-[#232321] rounded-[48px] mt-[-80px] md:mt-[-130px] pt-16 pb-0 px-8 md:px-16 relative z-20 overflow-hidden">
          {/* Links Section */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-[128px]">
            {/* About Us */}
            <div className="flex flex-col gap-4 w-[446px]">
              <h3 className="text-[#FFA52F] font-semibold text-[36px]">
                About us
              </h3>
              <p
                className={`${openSans.className} text-[#E7E7E3] text-[16px] font-semibold`}
              >
                We are the biggest hyperstore in the universe. <br /> We got you
                all cover with our exclusive <br /> collections and latest
                drops.
              </p>
            </div>

            {/* Categories, Company, Follow Us */}
            <div className="flex flex-col sm:flex-row gap-10 md:gap-[128px]">
              {/* Categories */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[#FFA52F] font-semibold text-[24px]">
                  Categories
                </h3>
                <ul
                  className={`${openSans.className} flex flex-col gap-2 text-[16px]`}
                >
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
                        className="text-[#E7E7E3] hover:text-grey-600 transition-colors text-[16px]"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[#FFA52F] font-semibold text-[24px]">
                  Company
                </h3>
                <ul className={`${openSans.className} flex flex-col gap-2`}>
                  {['About', 'Contact', 'Blogs'].map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-[#E7E7E3] hover:text-grey-600 transition-colors text-[16px]"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Follow Us */}
              <div className="flex flex-col gap-4">
                <h3 className="text-[#FFA52F] font-semibold text-[24px]">
                  Follow us
                </h3>
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

          <div
            className="mt-16 w-full overflow-hidden"
            style={{
              height: 'clamp(60px, 12.5vw, 200px)',
            }}
          >
            <Image
              src="/footer.svg"
              alt="KICKS"
              width={3840}
              height={960}
              quality={100}
              priority
              unoptimized
              className="w-full max-w-none h-auto brightness-0 invert block"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
        </div>
      </Container>

      {/* Copyright */}
      <div className="text-center py-6">
        <p
          className={`${openSans.className} text-[#232321] text-[16px] font-normal`}
        >
          &copy; All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
