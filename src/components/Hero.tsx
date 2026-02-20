import Image from 'next/image';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 mb-20">
      <div className="bg-[#ECEEF0] rounded-3xl p-8 md:p-16 flex flex-col md:flex-row relative overflow-hidden group">
        
        {/* Left Content */}
        <div className="md:w-1/2 z-10 flex flex-col justify-center">
          <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-[0.85] text-black">
            DO IT <span className="text-blue-600">RIGHT</span>
          </h1>
          <div className="mt-8">
            <h2 className="text-xl md:text-3xl font-extrabold uppercase bg-black text-white inline-block px-4 py-2 transform -skew-x-12">
              NIKE AIR MAX
            </h2>
          </div>
          <p className="mt-6 text-gray-700 text-lg max-w-sm font-medium">
            Nike introducing the new air max for everyone - comfortable and durable.
          </p>
          <div className="mt-8">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Right Images */}
        <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center items-center z-10">
          <img 
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Main Shoe" 
            className="w-full max-w-lg object-contain transform -rotate-12 group-hover:rotate-0 group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-2xl"
          />
          
          {/* Thumbnails */}
          <div className="absolute right-0 bottom-0 md:-right-8 md:-bottom-8 flex flex-col gap-4">
            <div className="w-24 h-24 bg-white rounded-2xl p-2 shadow-xl border-2 border-white cursor-pointer hover:border-blue-500 transition overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=200&q=80" alt="Thumb 1" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="w-24 h-24 bg-white rounded-2xl p-2 shadow-xl border-2 border-white cursor-pointer hover:border-blue-500 transition overflow-hidden">
              <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=200&q=80" alt="Thumb 2" className="w-full h-full object-cover rounded-xl" />
            </div>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white opacity-40 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      </div>
    </div>
  );
}
