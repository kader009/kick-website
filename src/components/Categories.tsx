import Container from './ui/Container';

const CATEGORIES = [
  {
    id: 1,
    name: 'LIFESTYLE SHOES',
    image:
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    name: 'BASKETBALL SHOES',
    image:
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Categories() {
  return (
    <div className="bg-[#232321] text-white py-16 md:py-24">
      <Container>
        <div className="flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-8 md:mb-12">
            <h2
              className="text-[74px] font-semibold uppercase tracking-tighter"
            >
              CATEGORIES
            </h2>

            {/* Navigation Arrows */}
            <div className="flex gap-2">
              <button className="w-10 h-10 md:w-12 md:h-12 bg-gray-500 rounded-lg flex items-center justify-center hover:bg-gray-400 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>
              <button className="w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2">
            {CATEGORIES.map((category) => (
              <div
                key={category.id}
                className="bg-[#ECEEF0] rounded-tl-[48px] rounded-bl-[16px] rounded-br-[16px] py-12 px-8 flex flex-col justify-between group cursor-pointer h-[400px] md:h-[500px] relative overflow-hidden"
              >
                {/* Product Image */}
                <div className="flex-1 flex items-center justify-center mb-6 z-10">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full max-w-[350px] object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Bottom Content */}
                <div className="flex justify-between items-end z-10">
                  <h3
                    className="text-black text-2xl md:text-3xl font-bold uppercase w-1/2 leading-tight"
                  >
                    {category.name.split(' ').map((word, i) => (
                      <span key={i}>
                        {word}
                        <br />
                      </span>
                    ))}
                  </h3>

                  <div className="w-10 h-10 md:w-12 md:h-12 bg-[#232321] rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
