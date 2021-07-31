<template>
  <div>
    <h1>{{ todo.title }}</h1>
    <p>Id: {{ todo.id }}</p>
    <p>Context: {{ todo.context }}</p>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import { Todo } from "@/models";

type Prop = {
  todo: Todo;
};

export default defineComponent({
  props: {
    todo: {
      type: Object as PropType<Prop["todo"]>,
      required: true,
    },
  },
});
</script>
