import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { QueryPayload } from "./interface";

/* base url query */
export const baseQuery = fetchBaseQuery({
  baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

/* common method for mutation */
export const mutationQuery = (
  url: any,
  body: any,
  method: string
): QueryPayload => {
  const headers = {
    // "Content-type": "application/json; charset=UTF-8",
  };
  return {
    url,
    method,
    body,
    headers,
  };
};
