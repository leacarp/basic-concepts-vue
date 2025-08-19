<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Root: {{ multipleCounter }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <br />
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from 'vue';

export default defineComponent({
  props: {
    value: { type: Number, default: 15 },
  },
  setup(props) {
    const counter = ref(props.value);
    const multipleCounter = computed(() => counter.value * 2);

    return {
      counter,
      multipleCounter,
    };
  },
});
</script>
