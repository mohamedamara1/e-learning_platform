import { useQuery } from "react-query";
import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
Session.addAxiosInterceptors(axios);
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

export function useAddPost(args) {
  const {postData, attachements} = args;
  return useQuery(
    ["post", postData, attachements],
    async () => {
      axios.post(`http://localhost:5000/api/v1/posts/add_post`, {
        postData: postData,
        attachements: attachements
      })
      .then(function (response){console.log(response)})
      .then(function (error){console.log(error)})
    }
  )
}
