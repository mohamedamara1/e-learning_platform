// Need to use the React-specific entry point to import createApi
import { mainApi } from "./mainApi";
// Define a service using a base URL and expected endpoints
export const postsApi = mainApi.injectEndpoints({
  reducerPath: "postsApi",
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (args) => {
        const { courseId } = args;
        return {
          url: `posts/get_posts/`,
          params: { courseId },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPostsQuery } = postsApi;
