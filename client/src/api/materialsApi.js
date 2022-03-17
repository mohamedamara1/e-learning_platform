// Need to use the React-specific entry point to import createApi
import { mainApi } from "./mainApi";
// Define a service using a base URL and expected endpoints
export const materialsApi = mainApi.injectEndpoints({
  reducerPath: "materialsApi",
  endpoints: (builder) => ({
    getMaterialUnitsByCourseIdIncludeMaterials: builder.query({
      query: (args) => {
        const { courseId } = args;
        return {
          url: `materials/get_materialUnits_by_courseId_include_materials/`,
          params: { courseId },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMaterialUnitsByCourseIdIncludeMaterialsQuery } =
  materialsApi;
