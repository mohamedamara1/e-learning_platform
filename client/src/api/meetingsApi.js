import { useQuery, useMutation } from "react-query";
import axios from "axios";

export function useGetMeetings(args) {
  const { userId } = args;
  return useQuery(
    ["meetings", userId],
    async () => {
      const { data } = await axios.get(
        `http://localhost:5000/api/v1/meetings/get_meetings`
      );
      return data;
    },
    { refetchOnWindowFocus: false }
  );
}
