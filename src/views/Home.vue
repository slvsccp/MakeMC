<template>
  <div>
    <Banner />
  </div>
  <div>
    <Main />
  </div>
</template>

<script>
  import Banner from '../components/Banner.vue'
  import Main from '../components/Main.vue'

  export default {
    name: 'Home',
    components: {
      Banner,
      Main
    }
  }
</script>
