import { ReactNode, createContext, useContext, useState } from "react";

// Provider Props
type AppContextProviderProps = {
  children: ReactNode;
};

// Define the properties and methods you want to provide in the context
type CartContextType = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const AppContext = createContext<CartContextType>({
  count: 0,
  setCount: () => {},
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [count, setCount] = useState(0);

  const value = {
    count,
    setCount,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
