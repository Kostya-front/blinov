<template>
    <form>
        <v-text-field 
            v-model="lessonStore.topicValue"
            @input="onInput"
            placeholder="Поиск темы..."
            type="text"
         />
    </form>
</template>

<script setup lang="ts">
import { useLessonStore } from './store';

const lessonStore = useLessonStore()

function onInput() {
    lessonStore.searchTopic()
}
</script>