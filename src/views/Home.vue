<template>
  <div class="home">

    <h1>this is home page</h1>
    <Carousel/>
  </div>
</template>

<script>
// @ is an alias to /src

import Carousel from '../components/Carousel.vue'
export default {
  name: 'Home',
  components: {
  Carousel
  }
}
</script>
