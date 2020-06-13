<template>
  <div class="sliderCard" @click="activeToggle" :class="active ?  'active':null" >
    <span class="activeBar"></span>
    <div class="sliderCardTitle">{{title}}</div>
    <div class="sliderCardContent">
      <p>{{description}}</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "SliderCard",
        props:['title','description'],
        data(){
          return{
            active:false,
          }
        },
      methods:{
          activeToggle:function () {
this.active = !this.active;
          }
      }
    }
</script>

<style scoped>

</style>
