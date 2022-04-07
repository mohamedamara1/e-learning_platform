// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import axios from "axios";

// initialize an empty api service that we'll inject endpoints into later as needed

axios.defaults.headers = {
  "Content-Type": "application/json",
};
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: "" }) =>
  async ({ url, method, data }) => {
    console.log("url :", url, "method :", method, "data :", data);
    try {
      const result = await axios({
        url: baseUrl + url,
        method,
        data,
        headers: { "Content-Type": "rojla" },
      });
      return { data: result.data };
    } catch (axiosError) {
      let err = axiosError;
      return {
        error: { status: err.response?.status, data: err.response?.data },
      };
    }
  };

export const mainApi = createApi({
  reducerPath: "mainApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:5000/api/v1/",
  }),
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => ({
        url: `users/get_teachers_detailled`,
      }),
    }),
    addTeacher: builder.mutation({
      query: (body) => ({
        url: `auth/signup`,
        method: "POST",
        body,
      }),
      //  console.log(typeof body);
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
export const {
  useGetTeachersQuery,
  useAddTeacherMutation,
  useAddTestMutation,
} = mainApi;
