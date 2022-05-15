import { useQuery } from "react-query";
import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
Session.addAxiosInterceptors(axios);
export function useGetCourses(args) {
  const { userId } = args;
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
    return data;
  });
}
