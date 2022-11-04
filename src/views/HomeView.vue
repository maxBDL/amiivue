<script setup>
import Card from '@/components/Card.vue'
import { ref, onMounted } from 'vue'
import { useRouter } from "vue-router"
import axios from 'axios'

const AMIIBO_API = 'https://www.amiiboapi.com/api/'

const router = useRouter()

const amiibosTail = ['01200502',
  '03990902',
  '00b60502'];

const amiibos = ref([]);

const goToAmiibo = amiiboId => {
  const routeOptions = {
    name: 'amiiboDetail',
    params: {
      amiiboId: amiiboId
    }
  }

  router.push(routeOptions)
}


onMounted(async () => {
  const amiiboUrl = AMIIBO_API + 'amiibo/'
  amiibosTail.forEach(async (tail) => {
    const amiibo = await axios.get(amiiboUrl, { params: { tail: tail } })
    amiibos.value.push(amiibo.data.amiibo[0]);
  });
})



</script>

<template>
  <!-- Banner -->
  <section id="main">
    <div class="container">
      <section id="banner">
        <header>
          <h2>Hey.Bienvenue sur ma collection</h2>
        </header>
      </section>

      <!-- Intro -->
      <section id="intro" class="container">
        <div class="row">
          <Card v-for="amiibo in amiibos" :key="amiibo.tail" :amiibo="amiibo" @click="goToAmiibo(amiibo.tail)" />
        </div>
        <footer>
          <ul class="actions">
            <li @click.stop="router.push('amiibo')" class="button large">Liste complète</li>
          </ul>
        </footer>
      </section>
    </div>
  </section>
</template>
