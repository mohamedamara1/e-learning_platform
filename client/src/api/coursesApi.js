// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mainApi } from "./mainApi";
// Define a service using a base URL and expected endpoints
export const coursesApi = mainApi.injectEndpoints({
  reducerPath: "coursesApi",
  endpoints: (builder) => ({
    getCourses: builder.query({
      query: (userId) => ({
        url: `courses/get_courses`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoursesQuery } = coursesApi;
