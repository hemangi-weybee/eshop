import { createApi } from '@reduxjs/toolkit/query/react';
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query';
import { AddUser, AuthenticateUser } from '../gql/gqlQueries';
import { baseGQL } from './baseQuery';

export const authenticateApi = createApi({
  reducerPath: 'login',
  baseQuery: graphqlRequestBaseQuery({
    url: baseGQL
  }),
  endpoints: (builder) => ({
    login: builder.query({
      query: (data) => ({
        document: AuthenticateUser,
        variables: data
      })
    }),
    signup: builder.query({
      query: (data) => ({
        document: AddUser,
        variables: data
      })
    })
  })
});

export const { useLoginQuery, useSignupQuery } = authenticateApi;
