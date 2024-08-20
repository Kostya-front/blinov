<template>
  <div :class="$style.TopicList">
    <v-expansion-panels v-for="topic of lessonStore.topicsArray" :key="topic.id">
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

<script setup lang="ts">
import { useLessonStore } from '@/features/lessons/store';

const lessonStore = useLessonStore()

 
</script>

<style lang="scss" module>
.TopicList {
  //
}
</style>
