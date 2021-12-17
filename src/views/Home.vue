<script setup>
import { ref, onMounted } from 'vue'
import MovieService from '../services/MovieService'

const datas = ref([])

onMounted(() => {
    MovieService.getMovies().then(res => {
        console.log(res.data.results)
        datas.value = res.data.results
    }).catch(err => {
        console.log(err)
    })
})
</script>


<template>
    <div class="row">
        <div class="col-4" v-for="(data,index) of datas" :key="index">
            <router-link :to="{ name: 'MovieDetail', params: { id: data.id } }">{{ data.title }}</router-link>
        </div>
    </div>
</template>


