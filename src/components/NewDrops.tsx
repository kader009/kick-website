import Container from './ui/Container';
import Image from 'next/image';

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800', // Placeholder for actual shoes
    isNew: true,
  },
  {
    id: 2,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800',
    isNew: true,
  },
  {
    id: 3,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800',
    isNew: true,
  },
  {
    id: 4,
    name: 'ADIDAS 4DFWD X PARLEY RUNNING SHOES',
    price: 125,
    image:
      'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=800',
    isNew: true,
  },
];

export default function NewDrops() {
  return (
    <Container className="mb-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-10 w-full">
        <h2
          className="text-[#232321] text-5xl md:text-[72px] font-black uppercase leading-[0.9] tracking-tighter"
          style={{ fontFamily: 'var(--font-rubik)' }}
        >
          DON'T MISS OUT
          <br />
          NEW DROPS
        </h2>

        <button className="bg-[#4A69E2] hover:bg-blue-600 text-white font-bold py-3 px-6 md:px-8 rounded-xl transition-all shadow-lg text-xs md:text-sm uppercase tracking-wide mt-6 md:mt-0">
          SHOP NEW DROPS
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
        {MOCK_PRODUCTS.map((product) => (
          <div key={product.id} className="flex flex-col flex-1 group">
            {/* Image Card */}
            <div className="relative aspect-4/4 bg-[#F4F5F7] rounded-[24px] overflow-hidden mb-4 p-4 flex items-center justify-center">
              {/* "New" Badge badge */}
              {product.isNew && (
                <div className="absolute top-0 left-0 bg-[#4A69E2] text-white text-[10px] md:text-xs font-bold px-4 py-2 rounded-br-[16px]">
                  New
                </div>
              )}

              {/* Product Image */}
              <div className="w-full h-full relative flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[85%] object-contain"
                />
              </div>
            </div>

            {/* Product Details */}
            <div className="flex flex-col mt-2">
              <h3
                className="font-bold text-[#232321] text-[16px] md:text-[20px] leading-[1.2] uppercase mb-4"
                style={{ fontFamily: 'var(--font-rubik)' }}
              >
                {product.name}
              </h3>

              <button className="w-full bg-[#232321] text-white hover:bg-black font-semibold py-4 rounded-lg uppercase text-xs md:text-[14px] transition-colors">
                VIEW PRODUCT -{' '}
                <span className="text-[#FFA52F]">${product.price}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}
