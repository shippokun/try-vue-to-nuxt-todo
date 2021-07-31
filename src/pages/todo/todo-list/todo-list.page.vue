<template>
  <todo-list-container />
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { TodoListContainer } from "./containers";

export default defineComponent({
  components: { TodoListContainer },
});
</script>
