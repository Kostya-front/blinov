import { lessons } from "@/db/lessons"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useLessonStore = defineStore('lessons', () => {
    const page = ref(1)
    const paginateIndex = ref(0)
    const lessonsArray = ref(lessons.reverse())
    
    function paginateLessons(index: number) {
        paginateIndex.value = index * 5
    }

    const paginatedLessons = computed(() => {
        return lessons.slice(paginateIndex.value, paginateIndex.value + 5)
    })

    const paginatedBtns = computed(() => {
        return Math.floor(lessonsArray.value.length / 5)
    })
    return {
        lessonsArray,
        paginatedLessons,
        paginatedBtns,
        page,
        paginateLessons
    }
})