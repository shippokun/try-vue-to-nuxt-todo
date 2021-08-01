<template>
  <div>
    <h1>{{ todo && todo.title }}</h1>
    <p>Id: {{ todo && todo.id }}</p>
    <p>completed: {{ todo && todo.completed }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Todo } from "@/models";

type Prop = {
  todo: Todo | null;
};

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Prop["todo"]>,
      default: null,
    },
  },
});
</script>
