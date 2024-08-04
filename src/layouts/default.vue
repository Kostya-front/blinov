<template>
  <div :class="$style.default">
    <Header/>
    <Aside/>

    <main :class="$style.main">
      <router-view/>
    </main>
  </div>
</template>

<script>
import Aside from "../widgets/Aside.vue";
import Header from "@/widgets/header.vue";
export default {
  name: 'default',
  components: {
    Header,
    Aside
  }
};
</script>

<style lang="scss" module>
.main {
  grid-area: main;
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 5px;
  }
}
.default {
  display: grid;
  grid-template-columns: 1fr 4fr;
  height: 100vh;
  grid-template-areas: 'header header' 'aside main';
  grid-template-rows: max-content auto;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-areas: 'header' 'main' 'aside';
  }
}
</style>
