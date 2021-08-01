export type Todo = {
  id: string;
  title: string;
  completed: string;
};

export type TodoUpdateDto = Pick<Todo, "title" | "completed">;
export type TodoCreateDto = TodoUpdateDto;
