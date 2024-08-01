import { defineStore } from "pinia";
import { ref } from "vue";


export const useMenuStore = defineStore('menu', () => {
  const isVisible = ref(false)

  function toggleMenu() {
    isVisible.value = !isVisible.value
  }

  return {
    isVisible,
    toggleMenu
  }
})
