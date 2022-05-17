import { useQuery } from "react-query";
import axios from "axios";
import Session from "supertokens-auth-react/recipe/session";
Session.addAxiosInterceptors(axios);
export function useGetConferences(args) {
  const { userId } = args;
  return useQuery(
    ["conferences", userId],
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/conferences/get_conferences`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}