<script setup>
import { useCounterStore } from "../store";

</script>

<template>
  <div>
    <h1>Counter: {{ useCounterStore().count }}</h1>
  </div>
</template>