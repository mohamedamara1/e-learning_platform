import { useQuery, useMutation, useQueryClient } from "react-query";
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
  const queryClient = useQueryClient();

  return useMutation(
    ["teachers"],
    (updatedTeacher) => {
      return axios({
        url: "http://localhost:5000/api/v1/users/teacher",
        method: "PUT",
        data: updatedTeacher,
        params: {
          teacherId: updatedTeacher.id,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["teachers"]);
      },
    }
  );
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

export function useGetStudents() {
  return useQuery(
    ["students"],
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/users/get_students_detailled`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}
export function useAddStudent() {
  return useMutation(["students"], (student) => {
    return axios({
      url: "http://localhost:5000/api/v1/auth/signup",
      method: "POST",
      data: student,
    });
  });
}
export function useUpdateStudent() {
  const queryClient = useQueryClient();

  return useMutation(
    ["students"],
    (updatedStudent) => {
      return axios({
        url: "http://localhost:5000/api/v1/users/student",
        method: "PUT",
        data: updatedStudent,
        params: {
          teacherId: updatedStudent.id,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["students"]);
      },
    }
  );
}
export function useDeleteStudent() {
  return useMutation(["students"], (studentId) => {
    return axios({
      url: "http://localhost:5000/api/v1/users/student",
      method: "DELETE",
      params: {
        studentId,
      },
    });
  });
}
