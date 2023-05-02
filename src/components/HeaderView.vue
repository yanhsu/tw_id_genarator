<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import router from '../router/index'

const route=useRoute();
const activePath = computed(() =>route.path)


function chgpage(routerName) {
    router.push({
        name: routerName
      });
}
</script>

<template>
    <b-card>
    <b-nav pills>
        <router-link to="/twid">
            <b-nav-item :active="activePath === '/twid'">身分證字號</b-nav-item>
        </router-link>
        <b-nav-item :active="activePath === '/guiNumber'" @click="chgpage('guiNumber')">營利事業統編</b-nav-item>
        <b-nav-item :active="activePath === '/oldRc'" @click="chgpage('oldRc')">舊式居留證編號</b-nav-item>
        <b-nav-item :active="activePath === '/newRc'" @click="chgpage('newRc')">新式居留證編號</b-nav-item>
    </b-nav>
    </b-card>
</template>

