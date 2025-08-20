<template>
  <h1>Hello World from Vue!</h1>
  <hr />

  <MyCounter :value="8" text="I'am a prop!" />
  <MyCounterScript />
  <MyCounterScript2 :value="5" />
</template>

<script lang="ts" setup>
import MyCounter from './components/MyCounter.vue';
import MyCounterScript from './components/MyCounterScript.vue';
import MyCounterScript2 from './components/my-counter-script/MyCounterScript2.vue';
</script>

<!-- Si queremos que el estilo se aplique solamente a un SFC utilizamos scoped, para estilos globales no se utiliza-->
<style scoped></style>
