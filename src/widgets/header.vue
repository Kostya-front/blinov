<template>
  <header :class="$style.header">
    <a target="_blank" href="https://telemost.yandex.ru/j/30690440236063">
      <img src="https://dynamic.design.com/preview/logodraft/bb05106d-e831-4746-bcdc-5bb87b72250b/image/large.png" alt="logo_link"/>
    </a>

    <ToggleMenu/>
  </header>
</template>

<script>
import ToggleMenu from "@/features/menu/ToggleMenu.vue";
export default {
  name: 'header',
  components: { ToggleMenu }
};
</script>

<style lang="scss" module>
.header {
  grid-area: header;
  padding: 5px 15px;
  background: var(--main-background);
  display: grid;
  grid-template-columns: 100px max-content;
  justify-content: space-between;
  align-items: center;
}

</style>
