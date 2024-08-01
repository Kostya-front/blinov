<template>
  <div :class="$style.WikiView">
    <h1>Полезные темы</h1>
    <TopicList/>
  </div>
</template>

<script>
import TopicList from "@/widgets/TopicList.vue";
export default {
  name: 'WikiView',
  components: { TopicList }
};
</script>

<style lang="scss" module>
.WikiView {
  //
}
</style>
