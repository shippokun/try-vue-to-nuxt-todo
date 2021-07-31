<template>
  <todo-detail-container :id="id" />
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/composition-api";
import { TodoDetailContainer } from "./containers";

export default defineComponent({
  components: { TodoDetailContainer },
  setup(_, { root }) {
    const id = ref(String(root.$route.params["id"]));

    return { id };
  },
});
</script>
