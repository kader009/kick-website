import { REVIEWS } from '../data/reviewData';
import Container from './ui/Container';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-[#FFA52F]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-sm font-semibold text-[#232321] ml-1">
        {rating}
      </span>
    </div>
  );
}

export default function Reviews() {
  return (
    <Container className="py-12 md:py-16">
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="flex justify-between items-center mb-8 md:mb-12">
          <h2
            className="text-[74px] font-semibold uppercase tracking-tighter text-[#232321]"
          >
            REVIEWS
          </h2>
          <button className="bg-[#4A69E2] hover:bg-blue-600 text-white font-medium py-3 px-6 md:px-8 rounded-[8px] text-[14px] md:text-[16px] uppercase tracking-wide">
            SEE ALL
          </button>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-[32px] overflow-hidden flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Review Info */}
              <div className="p-5 md:p-6 flex flex-col gap-2">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col gap-1">
                    <h3
                      className="font-bold text-[#232321] text-lg md:text-xl"
                    >
                      {review.title}
                    </h3>
                    <p
                      className="text-gray-500 text-sm leading-snug"
                      dangerouslySetInnerHTML={{ __html: review.description }}
                    />
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden shrink-0 ml-4">
                    <img
                      src={review.avatar}
                      alt="Reviewer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <StarRating rating={review.rating} />
              </div>

              {/* Review Image */}
              <div className="w-full aspect-4/3 overflow-hidden">
                <img
                  src={review.image}
                  alt="Review"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
