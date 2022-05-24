import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
Session.addAxiosInterceptors(axios);
export function useGetCourses(args) {
  // const { userId } = args;
  let userId = "test";
  return useQuery(
    ["courses", userId],
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/courses/get_courses`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export function useGetCourse(args) {
  const { courseId } = args;

  return useQuery(["courses", courseId], async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/courses/get_course`,
      {
        params: {
          courseId,
        },
      }
    );
    console.log("data : ", data);
    return data;},
    { refetchOnWindowFocus: false }
  );
}

export function useAddCourse() {
  return useMutation(["courses"], (course) => {
    return axios({
      url: "http://localhost:5000/api/v1/courses/add_course",
      method: "POST",
      data: course,
    });
  });
}
export function useUpdateCourse() {
  const queryClient = useQueryClient();

  return useMutation(
    ["courses"],
    (updatedCourse) => {
      return axios({
        url: "http://localhost:5000/api/v1/courses/update_course",
        method: "PUT",
        data: updatedCourse,
        params: {
          courseId: updatedCourse.id,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["courses"]);
      },
    }
  );
}
export function useDeleteCourse() {
  return useMutation(["courses"], (courseId) => {
    return axios({
      url: "http://localhost:5000/api/v1/courses/delete_course",
      method: "DELETE",
      params: {
        courseId,
      },
    });
  });
}
