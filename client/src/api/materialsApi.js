import { useQuery, useMutation } from "react-query";
import axios from "axios";

export function useGetMaterialUnitsByCourseIdIncludeMaterials(args) {
  const { courseId } = args;
  return useQuery(
    ["materials", courseId],
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/materials/get_materialUnits_by_courseId_include_materials`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}
