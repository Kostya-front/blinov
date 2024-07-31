<template>
  <div :class="$style.lessons">
    <GetLessons/>
  </div>
</template>

<script>
import GetLessons from "../features/lessons/GetLessons.vue";
export default {
  name: 'lessons',
  components: { GetLessons }
};
</script>

<style lang="scss" module>
.lessons {
  //
}
</style>
