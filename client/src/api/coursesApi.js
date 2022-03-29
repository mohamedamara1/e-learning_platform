// Need to use the React-specific entry point to import createApi
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
    getCourse: builder.query({
      query: (args) => {
        const { courseId } = args;
        return {
          url: `courses/get_course`,
          params: { courseId },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCoursesQuery, useGetCourseQuery } = coursesApi;
