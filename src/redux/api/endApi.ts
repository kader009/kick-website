import { baseApi } from './baseApi';

const ProductApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    product: build.query({
      query: () => '/products',
    }),

    category: build.query({
      query: () => '/categories',
    }),

    singleProduct: build.query({
      query: (id: string | number) => `/products/${id}`,
    }),
  }),
});

export const { useProductQuery, useCategoryQuery, useSingleProductQuery } =
  ProductApi;
