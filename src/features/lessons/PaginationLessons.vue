<template>
    <div :class="$style.pagination">
        <v-pagination 
            v-model="lessonStore.page" 
            :length="lessonStore.paginatedBtns"
            @update:model-value="(index) => lessonStore.paginateLessons(index - 1)"
        ></v-pagination>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useLessonStore } from './store';

const lessonStore = useLessonStore()
</script>

<style module>
.pagination {
 
}
</style>
