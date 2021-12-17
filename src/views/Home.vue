
<script setup>
import { reactive,onMounted } from 'vue'

const appInfo = reactive({
    title: 'Home',
})

</script>


<template>
    <h2>{{ appInfo.title }}</h2>
</template>


