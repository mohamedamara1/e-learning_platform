import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";

export function useGetSubjects() {
  return useQuery(
    ["subjects"],
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/subjects/get_subjects`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}
export function useAddSubject() {
  return useMutation(["subjects"], (subject) => {
    return axios({
      url: "http://localhost:5000/api/v1/subjects/add_subject",
      method: "POST",
      data: subject,
    });
  });
}
export function useUpdateSubject() {
  const queryClient = useQueryClient();

  return useMutation(
    ["subjects"],
    (updatedSubject) => {
      return axios({
        url: "http://localhost:5000/api/v1/subjects/update_subject",
        method: "PUT",
        data: updatedSubject,
        params: {
          subjectId: updatedSubject.id,
        },
      });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["subjects"]);
      },
    }
  );
}
export function useDeleteSubject() {
  return useMutation(["subjects"], (subjectId) => {
    return axios({
      url: "http://localhost:5000/api/v1/subjects/delete_subject",
      method: "DELETE",
      params: {
        subjectId,
      },
    });
  });
}