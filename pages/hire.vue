<template>
  <div>
  <h2 class="text-center font-weight-bold text-white">You want us to do</h2>
  <div class="row mt-5 mb-2 text-center">
    <div class="col-md-4">
     <TodoButton name="App Design" value="appdesign"></TodoButton>
    </div>
    <div class="col-md-4">
      <TodoButton name="Graphic Design" value="appdesign"></TodoButton>
    </div>
    <div class="col-md-4">
      <TodoButton name="Motion Design" value="motiondesign"></TodoButton>
    </div>
  </div>
  <div class="row mb-5 text-center">
    <div class="col-md-4">
      <TodoButton name="App Design" value="appdesign"></TodoButton>
    </div>
    <div class="col-md-4">
      <TodoButton name="Web Design" value="webdesign"></TodoButton>
    </div>
    <div class="col-md-4">
      <TodoButton name="Marketing" value="marketing"></TodoButton>
    </div>
  </div>
  <div class="row text-center">
    <div class="col-md-6">
      <input type="text" placeholder="NAME" class="hire-input">
    </div>
    <div class="col-md-6">
      <input type="text" placeholder="EMAIL" class="hire-input">
    </div>
    <div class="col-md-12 text-center">
      <button class="btn btn-send w-75">SEND REQUEST</button>
    </div>
  </div>
  </div>
</template>

<script>
    import TodoButton from "../components/TodoButton";
    export default {
        name: "hire",
      components: {TodoButton}
    }
</script>

<style scoped>

</style>
