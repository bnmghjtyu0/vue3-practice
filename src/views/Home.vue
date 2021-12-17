<script setup>
import { onMounted } from 'vue'
import MovieService from '../services/MovieService'


onMounted(() => {
    MovieService.getMovies().then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    })
})
</script>


<template>123</template>


