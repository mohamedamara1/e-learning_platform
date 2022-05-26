
import { useQuery, useMutation, QueryClient } from "react-query";
import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
Session.addAxiosInterceptors(axios);
const queryClient = new QueryClient();
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

export function useAddMaterial(formData) {
  return useMutation(
    async () => {
      axios.post(`http://localhost:5000/api/v1/materials/add_material`,
      formData,
      {headers: {'Content-Type': 'multipart/form-data' }})
      .then(function (response){console.log(response)})
      .then(function (error){console.log(error)})
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries('materials');
      },
    },
  )
}
