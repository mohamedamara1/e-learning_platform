import { useQuery, useMutation } from "react-query";
import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
Session.addAxiosInterceptors(axios);
export function useGetExerciceUnitsByCourseIdIncludeExercices(args) {
  const { courseId } = args;
  return useQuery(
    ["exercices", courseId],
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/exercices/get_practiceUnits_by_courseId_include_exercices`,
        {
          params: {
            courseId,
          },
        }
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}
