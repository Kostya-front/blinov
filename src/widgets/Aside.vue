<template>
  <ul class="Aside" :class="{Aside__visible: menuStore.isVisible}">
    <li @click="menuStore.toggleMenu">
      <router-link class="link" to="/">Занятия</router-link>
    </li>
    <li @click="menuStore.toggleMenu">
      <router-link class="link" to="/wiki">Wiki</router-link>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useMenuStore } from "@/features/menu/store";
import { computed } from "vue";

const menuStore = useMenuStore()


</script>

<style lang="scss">
.Aside {
  background: var(--main-background);
  z-index: 2;
  grid-area: aside;
  padding: 5px 0px;
  color: #fff;
  display: flex;
  flex-direction: column;
  transition: 1s;
  @media screen and (max-width: 767px) {
    transform: translateX(-100%);
    position: fixed;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__visible {
    transform: translateX(0);
  }
}
.link {
  color: inherit;
  text-decoration: none;
  display: flex;
  padding: 10px;
  transition: 1s;
  &:hover {
    background: rgba(50, 131, 168, 0.43);
  }
}
</style>
