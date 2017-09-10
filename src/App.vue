<template>
    <div id="app">
        <tips></tips>
        <router-view></router-view>
    </div>
</template>

<script>
  import tips from './component/tips.vue'
  export default {
    name: 'app',
    components: {
      tips
    }
  }
</script>

<style>

</style>
