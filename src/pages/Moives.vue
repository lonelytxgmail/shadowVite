<template>
    <q-input v-model="search" filled type="search">
        <div>
            <q-btn class="flex-center" label="Submit" type="submit" color="primary" @click="" />
        </div>
        </q-input>
    <div class="row q-gutter-xl flex-center">
        <q-card class="col-2" v-for="(item,index) in moiveList">
            <q-card-section>
                <q-img
                        class="col-3"
                        :src="item.vod_pic"
                        :ratio="1"
                        height="100"
                />
                <q-card-section class="col-7">
                    <!--                    {{ item.vod_content }}-->
                </q-card-section>
            </q-card-section>

            <q-separator/>

            <q-card-actions>
                <q-btn flat>
                </q-btn>
                <q-btn flat>
                    {{ item.vod_name }}
                </q-btn>
                <q-btn flat color="primary" :href="'https://vip.zykbf.com/?url='+item.vod_play_url.split('$')[1]"
                       target="_blank">
                    观看
                </q-btn>
            </q-card-actions>
        </q-card>
        <!--        <div class="q-pa-lg flex flex-center">-->
        <!--            <q-pagination-->
        <!--                v-model="moiveList.page"-->
        <!--                color="teal"-->
        <!--                :max=moiveList.pagecount-->
        <!--                :max-pages="10"-->
        <!--                :ellipses="false"-->
        <!--                :boundary-numbers="false"-->
        <!--            />-->
        <!--        </div>-->
        <div class="q-pa-lg flex flex-center">
            <q-pagination
                    v-model="page"
                    :max='pageCounet'
                    :max-pages="10"
                    boundary-links
            />
        </div>
    </div>
</template>

<script setup>

import {request} from "../requests/axios";
import {reactive, ref, watch} from "vue";

let moiveList = ref(null)
let page = ref(1)
let pageCounet = ref(1);
let search = ref('')
const detail = () => request({
    url: "inc/api_mac10.php?ac=detail",
    params: {
        pg: page.value,
        wd: search.value
    }
}).then(res => {
    if (res.data.code === 1) {
        console.log(res.data.list)
        moiveList.value = res.data.list
        page.value = res.data.page
        pageCounet.value = res.data.pagecount
    }
})
detail()
watch(page, (newpage) => {
    detail()
})
watch(search, (newpage) => {
    detail()
})
</script>

<style scoped>

</style>