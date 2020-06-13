<template>
  <div class="row">
    <div class="col-md-6">
      <h1 class="sliderTitle">Your next <br> interactive <br> experience</h1>
      <nuxt-link to="/hire" class="btn btn-SliderButton">Hire us
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </nuxt-link>
    </div>
    <div class="col-md-6">
      <div class="sliderImg">
        <img src="assets/img/astront.png" alt="">
      </div>
    </div>
    <div class="col-12">
      <div class="row">
        <div class="col-md-4">
          <SliderCard title="Fantasy interactive"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do"></SliderCard>
        </div>
        <div class="col-md-4">
          <SliderCard title="Fantasy interactive"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do"></SliderCard>

        </div>
        <div class="col-md-4">
          <SliderCard title="Fantasy interactive"
                      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do"></SliderCard>

        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

  import SliderCard from "../components/SliderCard";

  export default {
    components: {SliderCard},
  }
</script>

<style></style>
