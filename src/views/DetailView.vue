
<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from "vue-router"
import axios from 'axios'

const AMIIBO_API = 'https://www.amiiboapi.com/api/'

const route = useRoute()

const currentAmiibo = ref({})


const { amiiboId } = route.params


onMounted(async () => {
    const amiiboUrl = AMIIBO_API + 'amiibo/'
    const amiibo = await axios.get(amiiboUrl, { params: { tail: amiiboId } })
    currentAmiibo.value = amiibo.data.amiibo[0];
})



</script>

<template>
    <section id="main">
        <div class="container">
            <div class="row">
                <div class="col-4 col-12-medium">

                    <!-- Sidebar -->
                    <section class="box">
                        <header>
                            <h3>Infos</h3>
                        </header>
                        <p> amiiboSeries: <b>{{ currentAmiibo.amiiboSeries }}</b> <br />
                            character: {{ currentAmiibo.character }}<br />
                            gameSeries: {{ currentAmiibo.gameSeries }}<br />
                            type: {{ currentAmiibo.type }}
                        </p>

                    </section>
                    <section class="box">
                        <header>
                            <h3>Dates sorties</h3>
                        </header>

                        <ul class="divided">
                            <li v-for="(item, index) in currentAmiibo.release" :key="index">{{ index }}: {{ item }}</li>
                        </ul>

                    </section>

                </div>
                <div class="col-8 col-12-medium imp-medium">

                    <!-- Content -->
                    <article class="box post">
                        <img :src="currentAmiibo.image" :alt="currentAmiibo.character" />
                        <header>
                            <h2>{{ currentAmiibo.character }}</h2>
                            <p>{{ currentAmiibo.type }}</p>
                        </header>



                    </article>

                </div>
            </div>
        </div>
    </section>
</template>