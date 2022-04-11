import { useQuery, useMutation } from "react-query";
import axios from "axios";

export function useGetTeachers() {
  return useQuery(
    ["teachers"],
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/users/get_teachers_detailled`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}
export function useAddTeacher() {
  return useMutation(["teachers"], (teacher) => {
    return axios({
      url: "http://localhost:5000/api/v1/auth/signup",
      method: "POST",
      data: teacher,
    });
  });
}
export function useUpdateTeacher() {
  return useMutation(["teachers"], (updatedTeacher) => {
    return axios({
      url: "http://localhost:5000/api/v1/users/teacher",
      method: "PUT",
      data: updatedTeacher,
      params: {
        teacherId: updatedTeacher.id,
      },
    });
  });
}
export function useDeleteTeacher() {
  return useMutation(["teachers"], (teacherId) => {
    return axios({
      url: "http://localhost:5000/api/v1/users/teacher",
      method: "DELETE",
      params: {
        teacherId,
      },
    });
  });
}

/*const getTeachers = async () => {
  const { data } = await axios.get(
    `http://localhost:5000/api/v1/users/get_teachers_detailled`
  );
  return data;
};

const addTeacher = async (body) => {
  const result = await axios({
    url: "http://localhost:5000/api/v1/auth/signup",
    method: "POST",
    data: body,
  });
  console.log(result);
};
*/
