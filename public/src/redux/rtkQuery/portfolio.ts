import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SERVER } from "../../config";

const portfolioApi = createApi({
  reducerPath: "portfolioApi",
  baseQuery: fetchBaseQuery({ baseUrl: SERVER + "/portfolio" }),
  endpoints: (builder) => ({
    getResume: builder.query<Blob, void>({
      query: () => ({
        url: "/resume",
        responseHandler: (response) => response.blob(),
      }),
    }),
    getImages: builder.query<Blob, void>({
      query: (  ) => ({
        url: "/image",
        responseHandler: (response) => response.blob(),
      }),
    })
  }),
});

export const { useGetResumeQuery } = portfolioApi;
export default portfolioApi;
