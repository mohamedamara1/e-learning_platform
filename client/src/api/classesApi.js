import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

export function useGetClasses() {
  return useQuery(
    ["classes"],
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/classes/get_classes`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}
export function useAddClass() {
  return useMutation(["classes"], (studentClass) => {
    return axios({
      url: "http://localhost:5000/api/v1/classes/add_class",
      method: "POST",
      data: studentClass,
    });
  });
}
export function useUpdateClass() {
  const queryClient = useQueryClient();

  return useMutation(
    ["classes"],
    (updatedStudentClass) => {
      return axios({
        url: "http://localhost:5000/api/v1/classes/update_class",
        method: "PUT",
        data: updatedStudentClass,
        params: {
          studentClassId: updatedStudentClass.id,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["classes"]);
      },
    }
  );
}
export function useDeleteClass() {
  return useMutation(["classes"], (studentClassId) => {
    return axios({
      url: "http://localhost:5000/api/v1/classes/delete_class",
      method: "DELETE",
      params: {
        studentClassId,
      },
    });
  });
}
