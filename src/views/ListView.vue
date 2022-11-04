<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const amiibos = ref([])

onMounted(async () => {
    const allAmiibo = await axios.get('https://www.amiiboapi.com/api/amiibo/');
    amiibos.value = allAmiibo.data.amiibo
})


const goToAmiibo = amiiboId => {
    // console.log({moviesId})
    const routeOptions = {
        name: 'amiiboDetail',
        params: {
            amiiboId: amiiboId
        }
    }

    router.push(routeOptions)
}
</script>

<template>
    <section id="main">
        <div class="container">
            <!-- Content -->
            <article class="box post">

                <header>
                    <h2>Ma Collection</h2>
                    <p>{{amiibos.length}}</p>
                </header>
                <p>
                <table>
                    <tr>
                        <th>Character</th>
                        <th>game Series</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="amiibo in amiibos">
                        <td>{{ amiibo.character }}</td>
                        <td>{{ amiibo.gameSeries }}</td>
                        <td><button @click="goToAmiibo(amiibo.tail)">voir</button></td>
                    </tr>
                </table>
                </p>

            </article>

        </div>
    </section>
</template>