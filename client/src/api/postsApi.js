import { useQuery , useMutation, QueryClient} from "react-query";
import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
Session.addAxiosInterceptors(axios);
const queryClient = new QueryClient();
export function useGetPosts(args) {
  const { courseId } = args;
  return useQuery(
    ["posts", courseId],
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/posts/get_posts`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}

export function useAddPost(postData, attachements) {
  console.log(postData)
  return useMutation(
    async () => {
      console.log(postData);
      axios.post(`http://localhost:5000/api/v1/posts/add_post`, {
        postData: postData,
        attachements: attachements
      })
      .then(function (response){console.log(response)})
      .then(function (error){console.log(error)})
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries('courses');
      },
    },
  )
}
