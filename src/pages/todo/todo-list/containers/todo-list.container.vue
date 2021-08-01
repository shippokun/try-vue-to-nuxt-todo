<template>
  <p v-if="isFetching">loading...</p>
  <todo-list-component v-else :todos="todos" />
</template>
<script lang="ts">
import { defineComponent, onMounted, computed } from "@vue/composition-api";
import { TodoListComponent } from "../components";
import { FETCH_ALL_REQUEST } from "@/store/todos";

export default defineComponent({
  components: { TodoListComponent },
  setup(_, { root }) {
    onMounted(() => {
      root.$store.dispatch(FETCH_ALL_REQUEST);
    });
    const todos = computed(() => root.$store.getters["todos"]);
    const isFetching = computed(() => root.$store.getters["isFetching"]);

    return { todos, isFetching };
  },
});
</script>
