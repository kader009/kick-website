import { baseApi } from './baseApi';

const ProductApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    product: build.query({
      query: () => '/products',
    }),
  }),
});

export const { useProductQuery } = ProductApi;
