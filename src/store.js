import { computed, ref } from "vue";
import { createGlobalState, useAsyncState } from '@vueuse/core'

export let useCounterStore = createGlobalState(() => {
  let count = ref(0);
  let doubleCount = computed(() => count.value * 2);
  let increment = () => count.value++;
  return { count, doubleCount, increment };
});