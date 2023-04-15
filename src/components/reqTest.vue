<template>
    <div>
        <button @click="refresh"></button>
        <p>{{ imgUrl }}</p>
        <img :src="imgUrl" alt="aaa">
    </div>
</template>

<script setup>
import {request} from "../api/axios.js";
import {ref} from "vue";

const url = 'https://api.uomg.com/api/rand.img3'
const params = {"format": 'json'}
let imgUrl = ref()
const refresh= ()=> request({
    url: url,
    params: params,
}).then(res => {
    console.log(res.data)
    imgUrl.value = res.data.imgurl
})



</script>

<style scoped>

</style>