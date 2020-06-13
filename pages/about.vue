<template>
  <div class="row">
    <div class="col-md-6">
      <h1 class="sliderTitle">We <br> believe in <br> passionate <br> people</h1>
      <a href="" class="btn btn-Career">CAREER <i class="fa fa-arrow-right"
                                                  aria-hidden="true"></i>
      </a>
    </div>
    <div class="col-md-6">
      <div class="sliderImg">
        <img src="assets/img/about.png" alt="">
      </div>
    </div>
    <div class="col-12">
      <div class="row aboutCardRow">
        <div class="col-md-4">
<AboutCard img="assets/img/about1.jpg" title="Winners"></AboutCard>
        </div>
        <div class="col-md-4">
<AboutCard img="assets/img/about1.jpg" title="Winners"></AboutCard>
        </div>
        <div class="col-md-4">
          <AboutCard img="assets/img/about1.jpg" title="Winners"></AboutCard>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
    import AboutCard from "../components/AboutCard";
    export default {
        name: "about",
      components: {AboutCard}
    }
</script>

<style scoped>

</style>
