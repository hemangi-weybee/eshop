import { createApi } from '@reduxjs/toolkit/query/react';
import { baseGQL } from './baseQuery';
import { GetProductDetailGQL } from '../gql/gqlQueries';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';

export const productDetailApi = createApi({
  reducerPath: 'productDetail',
  baseQuery: graphqlRequestBaseQuery({
    url: baseGQL
  }),
  endpoints: (builder) => ({
    GetProductDetail: builder.query({
      query: (id) => ({
        document: GetProductDetailGQL,
        variables: {
          id: `${id}`
        }
      }),
      transformResponse: (res) => res.product
    })
  })
});

export const { useGetProductDetailQuery } = productDetailApi;
