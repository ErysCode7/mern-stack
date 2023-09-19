import {
  QueryClient,
  QueryKey,
  useMutation,
  useQuery,
} from "@tanstack/react-query";
import axios from "axios";

const BASE_URL = "http://localhost:8000/users";

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
      const response = await axios.get(BASE_URL);
      const { data = {} } = response || {};
      return data;
    } catch (err) {
      console.log(`Error: ${err}`);
      return [];
    }
  };

  const addUsers = async (payload: Users) => {
    try {
      const response = await axios.post(BASE_URL, payload);
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
