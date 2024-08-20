<template>
  <div :class="$style.WikiView">
    <h1>Полезные темы</h1>
    <SearchTopic/>
    <TopicList/>
  </div>
</template>

<script>
import SearchTopic from "@/features/lessons/SearchTopic.vue";
import TopicList from "@/widgets/TopicList.vue";
export default {
  name: 'WikiView',
  components: { TopicList, SearchTopic }
};
</script>

<style lang="scss" module>
.WikiView {
  //
}
</style>
