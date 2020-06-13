<template>
  <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <nuxt-link v-for="item in links" tag="a" :to="item.slug" class="nav-link">{{item.name}}</nuxt-link>
  </div>
</template>

<script>
    export default {
        name: "Tabs",
      data(){
          return{
            links:[
              {slug:'/', name:'Home'},
              {slug:'works', name:'Works'},
              {slug:'about', name:'About'},
              {slug:'hire', name:'Hire Us'},
            ]
          }
      }
    }
</script>

<style scoped>

  .nuxt-link-exact-active {
    color: white !important;
    background-color: transparent;
    font-weight: bold;
    font-size: 20px;
  }

</style>
