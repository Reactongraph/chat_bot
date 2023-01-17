import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mutationQuery = (url, payload, method) => {
  const headers = {
    // "Content-type": "application/json; charset=UTF-8",
  };
  return {
    url,
    method,
    body: payload,
    headers,
  };
};

const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

export const homepageApi = createApi({
  reducerPath: "homepageApi",
  baseQuery,
  endpoints: (build) => ({
    getBotResponse: build.mutation({
      query: () => mutationQuery(undefined, undefined, "GET"),
    }),
  }),
});

export const { useGetBotResponseMutation } = homepageApi;
