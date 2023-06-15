import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
  ICreateCountRequest,
  ICreateCountResponse,
  IGetAllCountsRequest,
  IGetAllCountsResponse,
} from "types/counts";

export const countsApi = createApi({
  reducerPath: "countApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.BASE_URL}/api` }),
  endpoints: (builder) => ({
    getAllCounts: builder.query<IGetAllCountsResponse, IGetAllCountsRequest>({
      query: ({ userId }) => `counts?userId=${userId}`,
    }),
    createCount: builder.mutation<ICreateCountResponse, ICreateCountRequest>({
      query: ({ count }) => ({
        url: `counts`,
        method: "POST",
        body: { count },
      }),
    }),
  }),
});

export const { useCreateCountMutation, useGetAllCountsQuery } = countsApi;
