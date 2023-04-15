<template>
    <q-input v-model="search" filled type="search">
        <div>
            <q-btn class="flex-center" label="Submit" type="submit" color="primary" @click=""/>
        </div>
    </q-input>
    <div class="row q-gutter-xl flex-center">
        <q-card class="col-2" v-for="(item,index) in moiveList" :key="index">
            {{ item.vod_name }}||{{ item.vod_id }}
            <q-separator/>
            {{ item.vod_remarks }}
            <q-separator/>
            {{ item.type_name }}||{{ item.type_id }}
            <q-separator/>
            <q-btn @click="getDetailBy(item.vod_id)"></q-btn>
        </q-card>

        <div class="q-pa-lg flex flex-center">
            <q-pagination
                    v-model="page"
                    :max='pageCount'
                    :max-pages="10"
                    boundary-links
            />
        </div>
    </div>
</template>

<script setup>

import {reactive, ref, watch} from "vue";
import {getDetail, getList} from "../api/api";

let moiveList = ref(null)
let page = ref(1)
let pageCount = ref(1);
let search = ref(null)
let t = ref(null)
let h = ref(null);
let ids = ref(null)
let param = reactive({
    pg: page,
    wd: search,
    t: t,
    h: h,
    ids: ids
})
let menuList = ref(null)
const emits = defineEmits(
    ['menu'])


const getListBy = () => getList(param).then(res => {
    console.log(res)
    page.value = res.page
    pageCount.value = res.pagecount
    menuList.value = res.class
    moiveList.value = res.list
    emits('menu', menuList.value)

})
const getDetailBy = (id) =>{
    param.ids=id
    getDetail(param).then(res=>{
        console.log(res)
    })
}
getListBy()
watch(page, (t, page, search) => {
    getListBy(param)
})
watch(search, (t, page, search) => {
    getListBy(param)
})
</script>

<style scoped>

</style>