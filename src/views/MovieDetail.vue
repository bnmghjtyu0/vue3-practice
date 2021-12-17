<script setup>

import { ref, onMounted, defineProps } from 'vue';
import MovieService from '../services/MovieService';

const props = defineProps({
    id: Number
})

const movieInfo = ref({})
onMounted(() => {
    MovieService.getMovieDetail(props.id).then(res => {
        console.log(res)
        movieInfo.value = res.data
    }).catch(err => {
        console.log(err)
    })
})


</script>


<template>
    <table>
        <tbody>
            <tr>
                <th>id</th>
                <td>{{ movieInfo.id }}</td>
            </tr>
            <tr>
                <th>link</th>
                <td>
                    <a :href="movieInfo.homepage" target="_blank">{{movieInfo.homepage}}</a>
                </td>
            </tr>
            <tr>
                <th>title</th>
                <td>{{ movieInfo.title }}</td>
            </tr>
            <tr>
                <th>vote</th>
                <td>{{ movieInfo.vote_average }}</td>
            </tr>
            <tr>
                <th>release date</th>
                <td>{{ movieInfo.release_date }}</td>
            </tr>

            <tr>
                <th>overview</th>
                <td>{{ movieInfo.overview }}</td>
            </tr>
        </tbody>
    </table>
</template>