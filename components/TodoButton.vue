<template>
  <div>
    <input v-if="active === true" checked type="checkbox" :value="value">
    <input v-if="active === false" type="checkbox" :value="value">
    <button class="btn btn-todo" @click="toggleActive" :class="active ? 'active':null">{{name}}
      <i v-if="active" class="fa fa-check"></i>
    </button>
  </div>
</template>

<script>
  export default {
    name: "TodoButton",
    props: ['name', 'value'],
    data() {
      return {
        active: false,
      }
    },
    methods: {
      toggleActive: function () {
        this.active = !this.active;
      }
    }

  }
</script>

<style scoped>

  input[type=checkbox]{
    width:0;
    height:0;
  }

</style>
