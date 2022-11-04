<script setup>
import { RouterLink, useRoute } from 'vue-router'
import {ref} from 'vue'
const route = useRoute()
const sideLinks = ref([
    {
    label:'Home',
    routeName:'home'
},
    {
    label:'Amiibo',
    routeName:'amiiboList'
}
])
</script>

<template>
    <nav id="nav">
				<ul>
                    <li v-for="(link, idx) in sideLinks" :key="idx">
                    <RouterLink  :class="{ current: route }" :to="{ name: link.routeName }"> {{ link.label }} </RouterLink>
                    </li>
				</ul>
			</nav>
</template>