<template>
  <div class="home-container">
    <h1>Monte o seu MakeBurger:</h1>
    <BurgerForm />
  </div>
</template>

<script>
  import BurgerForm from '../components/BurgerForm.vue'

  export default {
    name: 'MontarBurger',
    components: {
      BurgerForm
    }
  }
</script>