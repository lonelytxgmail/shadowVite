<template>
    <div class="q-pa fullscreen">
        <q-layout view="hHh Lpr lff" container>
            <q-header class="bg-primary text-white" height-hint="98" elevated>
                <q-toolbar>
                    <q-btn dense flat round icon="menu" @click="drawer = !drawer"/>
                    <q-toolbar-title>
                        IFinance
                    </q-toolbar-title>
                </q-toolbar>

                <q-tabs>
                    <q-route-tab to="/" label="首页"/>
                    <q-route-tab to="/economics" label="经济数据"/>
                    <q-route-tab to="/stock" label="行情数据"/>
                    <q-route-tab to="/moives" label="电影"/>
                </q-tabs>
            </q-header>

            <q-drawer
                    v-model="drawer"
                    show-if-above
                    :width="200"
                    :breakpoint="500"
                    bordered
                    class="bg-grey-3"
            >
                <q-scroll-area class="fit">
                    <q-list>

                        <template v-for="(menuItem,index) in menuList" :key="index">
                            <q-item clickable :active="index===2" v-ripple>
                                <q-item-section>
                                    {{ menuItem.type_name }}
                                </q-item-section>
                            </q-item>
                        </template>

                    </q-list>
                </q-scroll-area>
            </q-drawer>

            <q-page-container>
                <router-view @menu="changeMenu"/>
            </q-page-container>

        </q-layout>
    </div>
</template>

<script setup>
import {ref} from 'vue'

let drawer = ref(true)
let menuList = ref(null)
const toggleLeftDrawer = () => {
    console.log("aa")
}
const changeMenu = (value) => {
    // console.log(value)
    menuList.value = value
}


</script>