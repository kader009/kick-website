import Image from 'next/image';
import Container from './ui/Container';

export default function Hero() {
  return (
    <Container>
      <div className="flex flex-col items-center mt-2 md:mt-8 mb-20 w-full relative z-0">
        {/* Title */}
        <h1
          className="text-[223px] md:text-[180px] font-black uppercase leading-[0.85] text-[#232321] tracking-tighter text-center mb-6 md:mb-10 w-full"
        >
          DO IT <span className="text-[#4A69E2]">RIGHT</span>
        </h1>

        {/* Hero Image Container */}
        <div className="relative w-full aspect-4/5 md:aspect-21/9 md:h-[700px] rounded-[48px] overflow-hidden bg-gray-200 shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          <Image
            src="/heroimage1.png"
            alt="Nike Air Max"
            className="absolute inset-0 w-full h-full object-cover"
            width={1920}
            height={1080}
          />

          <div className="absolute inset-0 bg-black/10"></div>

          {/* Vertical Badge */}
          <div className="absolute left-0 top-[20%] md:top-1/4 bg-[#232321] text-[#E7E7E3] px-3 py-6 md:py-8 rounded-r-[16px] z-10 flex items-center justify-center">
            <span
              className="text-[10px] md:text-xs font-semibold tracking-wider"
              style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
              }}
            >
              Nike product of the year
            </span>
          </div>

          {/* Bottom Left Content */}
          <div className="absolute bottom-8 left-6 md:bottom-16 md:left-16 z-10 flex flex-col gap-2 md:gap-3">
            <h2
              className="text-white text-5xl md:text-[76px] font-black uppercase drop-shadow-xl tracking-tighter leading-none"
              style={{ fontFamily: 'var(--font-rubik)' }}
            >
              NIKE AIR MAX
            </h2>
            <p className="text-white text-sm md:text-lg font-medium max-w-[280px] md:max-w-[360px] leading-snug drop-shadow-md">
              Nike introducing the new air max for everyone's comfort
            </p>
            <button className="bg-[#4A69E2] hover:bg-blue-600 text-white font-bold py-3 px-6 md:px-8 rounded-xl transition-all shadow-lg w-max mt-3 md:mt-4 text-xs md:text-sm uppercase tracking-wide">
              SHOP NOW
            </button>
          </div>

          {/* Bottom Right Thumbnails */}
          <div className="absolute bottom-8 right-6 md:bottom-12 md:right-12 z-10 flex flex-col gap-3 md:gap-4">
            <div className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] rounded-[16px] md:rounded-[24px] overflow-hidden border-2 md:border-[3px] border-white shadow-xl cursor-pointer hover:scale-105 transition-transform">
              <img
                src="/heroimage2.png"
                alt="Shoe Variant 1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-[70px] h-[70px] md:w-[120px] md:h-[120px] rounded-[16px] md:rounded-[24px] overflow-hidden border-2 md:border-[3px] border-white shadow-xl cursor-pointer hover:scale-105 transition-transform">
              <img
                src="/heroimage3.png"
                alt="Shoe Variant 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
