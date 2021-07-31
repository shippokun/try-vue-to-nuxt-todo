<template>
  <div>
    <h1>TodoList</h1>
    <li v-for="todo in todos" :key="todo.id">
      <router-link :to="{ path: `/${todo.id}` }">
        <a>{{ todo.title }}</a></router-link
      >
    </li>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Todo } from "@/models";

type Prop = {
  todos: Todo[] | null;
};

export default defineComponent({
  props: {
    todos: {
      type: Array as PropType<Prop["todos"]>,
      default: null,
    },
  },
});
</script>
