<template>
  <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item" :class="item.active ? 'active' : null"  v-for="item in sliders">
        <label>
          <input type="radio" :name="item.type" :value="item.value">
          <img :src="item.src" alt="">
        </label>
        <div class="workTitle">{{item.title}}</div>
        <p class="workDescription" v-html="item.description"></p>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
       data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button"
       data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "WorkSlider",
       props:{
          sliders:Object
       }
    }
</script>

<style scoped>

</style>
