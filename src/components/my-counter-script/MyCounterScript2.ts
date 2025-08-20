// import { computed, ref, defineComponent } from 'vue';
import { defineComponent } from 'vue';
import { useCounter } from '@/composables/useCounter';

export default defineComponent({
  props: {
    value: { type: Number, default: 15 },
  },
  setup(props) {
    const { counter, multipleCounter } = useCounter(props.value);
    // const counter = ref(props.value);
    // const multipleCounter = computed(() => counter.value * 2);

    return {
      counter,
      multipleCounter,
    };
  },
});
