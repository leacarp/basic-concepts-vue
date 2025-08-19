<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <h3>Text: {{ text }}</h3>

    <div>
      <button @click="counter++">+1</button>
      <br />
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

// Forma tipica de definir props en javascript y asegurarnos de que nunca sea undefined
// const props = defineProps({
//   value: { type: Number, required: true },
// });

// Forma recomendada en ts con interfaces
interface Props {
  value?: number;
  text: string;
}

const props = defineProps<Props>();

// Como pusimos el value opcional damos por defecto un tipo de valor
const counter = ref(props.value ?? 5);
const squareCounter = computed(() => counter.value * counter.value);
console.log('Hola desde TypeScript');
</script>
