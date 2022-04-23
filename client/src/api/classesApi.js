import { useQuery, useMutation } from "react-query";
import axios from "axios";

export function useGetClasses(args) {
  const { userId } = args;
  return useQuery(
    ["classes", userId],
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/classes/get_classes`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export function useGetClass(args) {
  const { classId } = args;

  return useQuery(["classes", classId], async () => {
    const { data } = await axios.get(
      `http://localhost:5000/api/v1/classes/get_class`,
      {
        params: {
          classId,
        },
      }
    );
    console.log("data : ", data);
    return data;
  });
}
