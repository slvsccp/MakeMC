<template>
  <div id="main-banner">
    <!---<h1>Make Your Burger</h1>--->
  </div>
</template>

<script>
export default {
  name: 'Banner'
}
</script>

<style scoped>
  #main-banner {
    background-image: url('/img/burger-banner.png');
    background-position: auto;
    background-size: cover;
    height: 550px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
</style>