import { create } from "zustand";
import { persist } from "zustand/middleware";

export type TodoItem = {
  id: number;
  task: string;
  completed: boolean;
};

type Todo = {
  todo: TodoItem[];
  getTodos: () => void;
  addTodo: () => void;
  updateTodo: () => void;
  deleteTodo: () => void;
};

export const useTodosStore = create<Todo>()(
  persist(
    (set, get) => ({
      todo: [],
      getTodos: () => {},
      addTodo: () => {},
      updateTodo: () => {},
      deleteTodo: () => {},
    }),
    { name: "todos" }
  )
);
