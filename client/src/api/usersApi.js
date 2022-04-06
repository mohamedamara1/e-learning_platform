// Need to use the React-specific entry point to import createApi
import { mainApi } from "./mainApi";
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
          //      headers: { "content-type": "application/json" },
          /*     headers: {
            "Content-type": "application/json; charset=UTF-8",
          },*/
          body,
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetTeachersQuery, useAddTeacherMutation } = usersApi;
