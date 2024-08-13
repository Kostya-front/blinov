<template>
  <div :class="$style.lessons">
    <GetLessons/>
    <PaginationLessons/>
  </div>
</template>

<script>
import PaginationLessons from "@/features/lessons/PaginationLessons.vue";
import GetLessons from "../features/lessons/GetLessons.vue";
export default {
  name: 'lessons',
  components: { GetLessons, PaginationLessons }
};
</script>

<style lang="scss" module>
.lessons {
  display: grid;
  gap: 20px;
}
</style>
