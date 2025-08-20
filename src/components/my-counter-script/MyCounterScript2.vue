<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Root: {{ multipleCounter }}</h3>

    <div>
      <button class="btn" @click="counter++">+1</button>
      <button class="btn" @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript2.ts"></script>
