<template>
  <p v-if="isFetching">loading...</p>
  <todo-detail-component v-else :todo="todo" />
</template>
<script lang="ts">
import { defineComponent, computed, onMounted } from "@vue/composition-api";
import { TodoDetailComponent } from "../components";
import { FETCH_REQUEST } from "@/store/todos";

export default defineComponent({
  components: { TodoDetailComponent },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props, { root }) {
    onMounted(async () => {
      await root.$store.dispatch(FETCH_REQUEST, { id: props.id });
    });

    const todo = computed(() => root.$store.getters["todo"]);
    const isFetching = computed(() => root.$store.getters["isFetching"]);

    return { todo, isFetching };
  },
});
</script>
