import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // 状态
  const count = ref(0)
  
  // getter
  const doubleCount = computed(() => count.value * 2)
  
  // 动作
  function increment() {
    count.value++
  }
  
  function decrement() {
    count.value--
  }

  return { 
    count, 
    doubleCount, 
    increment, 
    decrement 
  }
}) 