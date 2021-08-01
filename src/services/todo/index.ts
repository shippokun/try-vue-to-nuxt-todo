import { TodoService } from "./todo.service";

export const todoService = new TodoService(process.env.VUE_APP_BASE_URL);
