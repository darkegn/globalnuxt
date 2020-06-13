<template>
  <div class="sliderCard" @click="toggleCard" :class="active ? 'active':null">
    <img :src="img" class="aboutCardImg" alt="">
    <div class="sliderAboutCardTitle">{{title}}</div>
  </div>
</template>

<script>
    export default {
        name: "AboutCard",
        props:['img','title'],
      data(){
          return{
            active:false
          }
      },
      methods:{
        toggleCard:function () {
         this.active = !this.active;
        }
      }
    }
</script>

<style scoped>

</style>
