import { useQuery, useMutation, QueryClient} from "react-query";
import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
Session.addAxiosInterceptors(axios);
const queryClient = new QueryClient();
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

export function useAddExercice(ExerciceData, attachements) {
  console.log(ExerciceData)
  return useMutation(
    async () => {
      console.log(ExerciceData);
      axios.post(`http://localhost:5000/api/v1/exercices/add_exercice`, {
        ExerciceData: ExerciceData,
        attachements: attachements
      })
      .then(function (response){console.log(response)})
      .then(function (error){console.log(error)})
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries('exercices');
      },
    },
  )
}