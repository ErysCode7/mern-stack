import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AppContextProvider } from "./context/app-context.tsx";
import "./styles/App.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <App />
      </AppContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
