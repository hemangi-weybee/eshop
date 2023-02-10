import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { SignupUser, LoginUser } from '../gql/gqlQueries';
import { baseGQL } from './baseQuery';

export const authenticateApi = createApi({
  reducerPath: 'login',
  baseQuery: graphqlRequestBaseQuery({
    url: baseGQL
  }),
  endpoints: (builder) => ({
    login: builder.query({
      query: (data) => ({
        document: LoginUser,
        variables: data
      })
    }),
    signup: builder.query({
      query: (data) => ({
        document: SignupUser,
        variables: data
      })
    })
  })
});

export const { useLoginQuery, useSignupQuery } = authenticateApi;
