<template>
  <button @click="menuStore.toggleMenu()" :class="$style.burger">
    <span></span>
  </button>
</template>

<script setup lang="ts">
  import { useMenuStore } from "@/features/menu/store";

  const menuStore = useMenuStore()

</script>

<style lang="scss" module>
.burger {
  display: none;
  background: #fff;
  border-radius: 50%;
  height: 50px;
  width: 50px;
  position: relative;
  z-index: 3;
  &:after, &:before, & span {
    content: '';
    display: flex;
    position: absolute;
    width: 70%;
    height: 5px;
    background: var(--main-background);
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  }
  &:after {
    top: 30%;
  }
  &:before {
    top: 70%;
  }
  @media screen and (max-width: 767px) {
    display: block;
  }
}
</style>
