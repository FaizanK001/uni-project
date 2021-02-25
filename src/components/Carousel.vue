<template>
<div id="demo" class="carousel slide" data-ride="carousel">

  <!-- Indicators -->
  <ul class="carousel-indicators">
    <li data-target="#demo" data-slide-to="0" class="active"></li>
    <li data-target="#demo" data-slide-to="1"></li>
  </ul>
  
  <!-- The slideshow -->
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/cdmp-banner.png" >
    </div>
    <div class="carousel-item">
      <img src="../assets/heart-health-banner.jpg"   >
    </div>
  </div>
  
  <!-- Left and right controls -->
  <a class="carousel-control-prev" href="#demo" data-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </a>
  <a class="carousel-control-next" href="#demo" data-slide="next">
    <span class="carousel-control-next-icon"></span>
  </a>
</div>

</template>

<script>
// @ is an alias to /src
  
export default {
  name: 'Home',
  components: { 
  
  },
  data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }


</script>
<style scoped>
img{
  height: 40vh;
  width: 100%;
  align-items: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
