// Need to use the React-specific entry point to import createApi
/*import { mainApi } from "./mainApi";
// Define a service using a base URL and expected endpoints
export const usersApi = mainApi.injectEndpoints({
  reducerPath: "usersApi",
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => ({
        url: `users/get_teachers_detailled`,
      }),
    }),
    addTeacher: builder.mutation({
      query: (body) => {
        //  console.log(typeof body);
        return {
          url: `auth/signup`,
          method: "POST",
          body,
        };
      },
    }),
    addTest: builder.mutation({
      query: (data) => {
        //  console.log(typeof body);
        return {
          url: `subjects/add_subject`,
          method: "POST",
          body: JSON.stringify({
            name: "physics",
            coefficient: 3,
          }),
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetTeachersQuery,
  useAddTeacherMutation,
  useAddTestMutation,
} = usersApi;
*/
