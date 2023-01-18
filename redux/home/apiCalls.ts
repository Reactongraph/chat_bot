import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery, mutationQuery } from "@/utils/helper";

export const homepageApi = createApi({
  reducerPath: "homepageApi",
  baseQuery: baseQuery,
  endpoints: (build) => ({
    getBotResponse: build.mutation({
      query: () => mutationQuery(undefined, undefined, "GET"),
    }),
  }),
});

export const { useGetBotResponseMutation } = homepageApi;
