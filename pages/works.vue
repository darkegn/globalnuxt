<template>
  <div class="row">
    <div class="col-12">
      <h2 class="text-center text-white font-weight-bold">Selected work</h2>
      <WorkSlider :sliders="sliders"></WorkSlider>
    </div>
  </div>
</template>

<script>
  import WorkSlider from "../components/WorkSlider";

  export default {
    name: "works",
    components: {WorkSlider},
    data() {
      return {
        sliders: [
          {
            title: 'Metiew & Smith',
            description: "lorem ipsum dolor bla bla  <br>  bla bla bla",
            type: 'work1',
            value: 1,
            src: 'assets/img/work.png',
            active:true
          },
          {
            title: 'Metiew & Smith 2',
            description: "lorem ipsum dolor bla bla  <br>  bla bla",
            type: 'work1', value: 1,
            src: 'assets/img/work.png'
          },
          {
            title: 'Metiew & Smith 3',
            description: "lorem ipsum dolor bla bla  <br>  bla bla bla",
            type: 'work1',
            value: 1,
            src: 'assets/img/work.png'
          },
        ]
      }
    }
  }
</script>

<style scoped>

</style>
