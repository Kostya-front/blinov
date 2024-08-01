<template>
  <div :class="$style.TopicList">
    <v-expansion-panels v-for="topic of topics" :key="topic.id">
      <v-expansion-panel
          :title="topic.title"
      >
        <template v-slot:text>
          <div v-html="topic.description"></div>
        </template>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { topics } from "../db/topics";
export default {
  name: 'TopicList',
  data() {
    return {
      topics

    }
  }
};
</script>

<style lang="scss" module>
.TopicList {
  //
}
</style>
