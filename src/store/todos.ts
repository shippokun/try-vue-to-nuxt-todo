import { Todo, TodoUpdateDto } from "@/models";
import { Module } from "vuex";

type TodoStore = {
  todos: Todo[];
  isFetching: boolean;
  selectedId: string | null;
};

export const FETCH_ALL_REQUEST = "[Todo] Fetch All";
export const FETCH_ALL_SUCCESS = "[Todo] Fetch All Success";
export const FETCH_ALL_FAILURE = "[Todo] Fetch All Failure";
export const FETCH_REQUEST = "[Todo] Fetch";
export const FETCH_SUCCESS = "[Todo] Fetch Success";
export const FETCH_FAILURE = "[Todo] Fetch Failure";
export const UPDATE_REQUEST = "[Todo] Update";
export const UPDATE_SUCCESS = "[Todo] Update Success";
export const UPDATE_FAILURE = "[Todo] Update Failure";
export const CREATE_REQUEST = "[Todo] Create";
export const CREATE_SUCCESS = "[Todo] Create Success";
export const CREATE_FAILURE = "[Todo] Create Failure";

const todoStore: Module<TodoStore, unknown> = {
  namespaced: false,

  state: {
    todos: [],
    isFetching: false,
    selectedId: null,
  },

  getters: {
    todos: (state) => {
      return state.todos;
    },

    isFetching: (state) => {
      return state.isFetching;
    },

    todo: (state) => {
      if (state.selectedId === null) return null;
      return state.todos.find((todo) => todo.id === state.selectedId);
    },
  },

  actions: {
    [FETCH_ALL_REQUEST]: async ({ commit }) => {
      try {
        commit(FETCH_ALL_REQUEST);
        // TODO: serviceでapi処理を書く
        const result: Todo[] = [
          { id: "1", title: "TestTitle1", context: "TestContext1" },
          { id: "2", title: "TestTitle2", context: "TestContext2" },
        ];
        commit(FETCH_ALL_SUCCESS, result);
        return { todos: result };
      } catch (error) {
        /** memo
         * mutation側でエラー内容を受け取るようにするのもいい。
         * その場合はルートストアにエラーを保持するのもいいかも。
         */
        commit(FETCH_ALL_FAILURE, error);
        throw error;
      }
    },
    [FETCH_REQUEST]: async ({ commit }, arg: { id: string }) => {
      try {
        const { id } = arg;
        commit(FETCH_REQUEST, id);
        const result = {
          id,
          title: `fetch_${id}_title`,
          context: `fetch_${id}_context`,
        };
        commit(FETCH_SUCCESS, result);
        return { todo: result };
      } catch (error) {
        commit(FETCH_FAILURE, error);
        throw error;
      }
    },
    [UPDATE_REQUEST]: async (
      { commit },
      arg: { id: string; todo: TodoUpdateDto }
    ) => {
      try {
        const { id } = arg;
        commit(UPDATE_REQUEST);
        const result = {
          id,
          title: `update_${id}_title`,
          context: `update_${id}_context`,
        };
        commit(UPDATE_SUCCESS, result);
        return { todo: result };
      } catch (error) {
        commit(UPDATE_FAILURE, error);
        throw error;
      }
    },
    [CREATE_REQUEST]: async ({ commit }, arg: { todo: Todo }) => {
      try {
        const { todo } = arg;
        commit(CREATE_REQUEST);
        const result = {
          id: todo.id,
          title: `create_${todo.id}_title`,
          context: `create_${todo.id}_context`,
        };
        commit(CREATE_SUCCESS, todo);
        return { todo: result };
      } catch (error) {
        commit(CREATE_FAILURE, error);
        throw error;
      }
    },
  },

  mutations: {
    [FETCH_ALL_REQUEST]: (state) => {
      state.isFetching = true;
    },
    [FETCH_ALL_SUCCESS]: (state, payload: Todo[]) => {
      state.isFetching = false;
      state.todos = payload;
    },
    [FETCH_ALL_FAILURE]: (state) => {
      state.isFetching = false;
    },
    [FETCH_REQUEST]: (state, id: string) => {
      state.isFetching = false;
      state.selectedId = id;
    },
    [FETCH_SUCCESS]: (state, todo: Todo) => {
      state.isFetching = false;
      state.todos = state.todos.map((t) => t.id).includes(todo.id)
        ? state.todos.map((t) => (t.id === todo.id ? todo : t))
        : [...state.todos, todo];
    },
    [FETCH_FAILURE]: (state) => {
      state.isFetching = false;
    },
    [UPDATE_REQUEST]: (state) => {
      state.isFetching = true;
    },
    [UPDATE_SUCCESS]: (state, todo: Todo) => {
      state.isFetching = false;
      state.todos = state.todos.map((t) => (t.id === todo.id ? todo : t));
    },
    [UPDATE_FAILURE]: (state) => {
      state.isFetching = false;
    },
    [CREATE_REQUEST]: (state) => {
      state.isFetching = true;
    },
    [CREATE_SUCCESS]: (state, todo: Todo) => {
      state.isFetching = false;
      state.todos = [...state.todos, todo];
    },
    [CREATE_FAILURE]: (state) => {
      state.isFetching = false;
    },
  },
};

export default todoStore;
