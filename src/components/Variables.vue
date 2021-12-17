
<script setup >
import { ref, reactive, onMounted } from 'vue'


const count = ref(null)
const appInfo = reactive({
    name: 'Counter',
    slogan: 'an app you can count on'
})


onMounted(() => {
    console.log('mounted')
    count.value = 1
})
</script>

<template>
    <div>
        <h1>{{ appInfo.name }}</h1>
        <h2>{{ appInfo.slogan }}</h2>
        <p>count: {{ count }}</p>
    </div>
</template>


<style scoped>
</style>
