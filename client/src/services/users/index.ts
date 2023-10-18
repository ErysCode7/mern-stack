import { USERS_ENDPOINT_URL } from "@/utils/constants";
import {
  QueryClient,
  QueryKey,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

type Users = {
  _id: number | string;
  name: string;
  age: number;
  gender: string;
};

const queryClient = new QueryClient();

export const useUsers = () => {
  const getUsers = async (): Promise<Users[]> => {
    try {
      const response = await axios.get(USERS_ENDPOINT_URL);
      const { data = {} } = response || {};
      return data;
    } catch (err) {
      console.log(`Error: ${err}`);
      return [];
    }
  };

  const addUsers = async (payload: Users) => {
    try {
      const response = await axios.post(USERS_ENDPOINT_URL, payload);
      console.log(response);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  const useGetUsers = () => {
    return useQuery<Users[]>({
      queryKey: ["users"],
      queryFn: async () => getUsers(),
    } as { queryKey: QueryKey });
  };

  const useAddUsers = () => {
    return useMutation(addUsers, {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    });
  };

  return {
    useGetUsers,
    useAddUsers,
  };
};
