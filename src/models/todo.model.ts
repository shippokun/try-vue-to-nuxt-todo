export type Todo = {
  id: string;
  title: string;
  context: string;
};

export type TodoUpdateDto = Pick<Todo, "title" | "context">;
export type TodoCreateDto = TodoUpdateDto;
