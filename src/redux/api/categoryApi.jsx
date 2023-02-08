import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { GetCategoriesGQL } from '../gql/gqlQueries';
import { baseGQL } from "./baseQuery";

export const categoryApi = createApi({
    reducerPath: 'allCategories',
    baseQuery: graphqlRequestBaseQuery({
        url: baseGQL
    }),
    endpoints: builder => ({
        GetCategories: builder.query({
            query: () => ({
                document: GetCategoriesGQL
            }),
            transformResponse: (response) => response.categories
        })
    })
});

export const { useGetCategoriesQuery } = categoryApi;