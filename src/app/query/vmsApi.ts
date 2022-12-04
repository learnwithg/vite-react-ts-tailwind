import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const vmsApi = createApi({
  reducerPath: "vmsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://visitor-management-8rsv9.ondigitalocean.app/api/tablets/",
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  }),
  endpoints: (builder) => ({
    getReasonToVisit: builder.query({ query: () => "visit-reasons" }),
  }),
});

export const { useGetReasonToVisitQuery } = vmsApi;

// export default reasonToVisitApi;
