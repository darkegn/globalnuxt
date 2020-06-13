<template>
  <div>
    <Header />
    <div class="container">
      <div class="row sliderTabs">
        <div class="col-2 sliderTabMenu">
          <Tabs />
        </div>
        <div class="col-md-9">
          <nuxt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "../components/Header";
  import Tabs from '../components/Tabs';
  export default {
    components:{
      Header,
      Tabs
    }
  }
</script>

<style>

</style>
