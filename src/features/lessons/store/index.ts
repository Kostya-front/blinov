import { lessons } from "@/db/lessons"
import { topics } from "@/db/topics"
import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useLessonStore = defineStore('lessons', () => {
    const page = ref(1)
    const paginateIndex = ref(0)
    const lessonsArray = ref(lessons.reverse())
    const topicValue = ref('')
    const topicsArray = ref([...topics])

    function searchTopic() {
        if(!topicValue.value) {
            topicsArray.value = [...topics]
            return
        }

        const foundTopics = topics.filter(topic => topic.description.includes(topicValue.value))

        topicsArray.value = foundTopics
    }

    function paginateLessons(index: number) {
        paginateIndex.value = index * 5
    }

    const paginatedLessons = computed(() => {
        return lessons.slice(paginateIndex.value, paginateIndex.value + 5)
    })

    const paginatedBtns = computed(() => {
        return Math.ceil(lessonsArray.value.length / 5)
    })
    return {
        lessonsArray,
        paginatedLessons,
        paginatedBtns,
        topicsArray,
        topicValue,
        page,
        searchTopic,
        paginateLessons
    }
})