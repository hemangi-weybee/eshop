import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GetFilteredDataGQL } from '../gql/gqlQueries';
import { baseGQL } from './baseQuery';

export const productsApi = createApi({
    reducerPath: 'products',
    baseQuery: graphqlRequestBaseQuery({
        url: baseGQL
    }),
    endpoints: builder => ({
        GetProducts: builder.query({
            query: (filter) => ({
                document: GetFilteredDataGQL,
                variables: filter || {}
            }),
            transformResponse: res => res.products
        }),
    })
});

export const { useGetProductsQuery } = productsApi;
