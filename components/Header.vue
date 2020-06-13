<template>
  <!-- Header --->
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
      <a class="navbar-brand" href="#"><img src="../static/assets/img/logo.png" alt=""> GLOBAL</a>
      <button @click="mobileMenu" class="navbar-toggler" type="button" data-toggle="collapse"
              data-target="#navTabMobile"
              aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div v-if="show" id="navTabMobile">
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <nuxt-link to="/" tag="li"><a class="nav-link" @click="close">Home</a></nuxt-link>
          <nuxt-link to="/works" tag="li"><a class="nav-link" @click="close">Works</a></nuxt-link>
          <nuxt-link to="/about" tag="li"><a class="nav-link" @click="close">About</a></nuxt-link>
          <nuxt-link to="/hire" tag="li"><a class="nav-link" @click="close">Hire Us</a></nuxt-link>

        </div>
      </div>
    </nav>
  </div>
  <!-- Header --->

</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        show: false
      }
    },
    methods: {
      mobileMenu: function () {
        this.show = !this.show;
      },
      close(){
        this.show = false;
      }
    }


  }
</script>

<style scoped>

</style>
