<script>
import Lessons from "../widgets/lessons.vue";
export default {
  components: {
    Lessons
  }
}
</script>

<template>
  <main :class="$style.main">
    <h1>Твой личный кабинет</h1>
    <Lessons/>
  </main>
</template>

<style module>
.main {
  grid-area: main;
  padding: 20px;
}
</style>
