import { QueryKey, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useUsers = () => {
  const getUsers = async () => {
    try {
      const response = await axios.get("");
      const { data = {} } = response || {};
      return data;
    } catch (err) {
      console.log(`Error: ${err}`);
      return err;
    }
  };

  const useGetUsers = () => {
    return useQuery({
      queryKey: ["users"],
      queryFn: async () => getUsers(),
    } as { queryKey: QueryKey });
  };

  return {
    useGetUsers,
  };
};
