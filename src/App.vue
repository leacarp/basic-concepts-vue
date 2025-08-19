<template>
  <h1>Hello World from Vue!</h1>
  <hr />

  <MyCounter :value="8" text="I'am a prop!" />
  <MyCounterScript />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
</script>

<!-- Si queremos que el estilo se aplique solamente a un SFC utilizamos scoped, para estilos globales no se utiliza-->
<style scoped>
h1 {
  color: green;
}
</style>
