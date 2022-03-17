// Need to use the React-specific entry point to import createApi
import { mainApi } from "./mainApi";
// Define a service using a base URL and expected endpoints
export const exercicesApi = mainApi.injectEndpoints({
  reducerPath: "exercicesApi",
  endpoints: (builder) => ({
    getExerciceUnitsByCourseIdIncludeExercices: builder.query({
      query: (args) => {
        const { courseId } = args;
        return {
          url: `exercices/get_practiceUnits_by_courseId_include_exercices/`,
          params: { courseId },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetExerciceUnitsByCourseIdIncludeExercicesQuery } =
  exercicesApi;
