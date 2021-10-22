<template>
  <div>
    <div class="row">
      <div class="card green">
        <h2>App do MakeBurger</h2>
        <p>São várias promoções com até 50% de desconto pra você aproveitar muito pagando pouco.</p>
        <img src="/img/card01.png" class="image">
      </div>

      <div class="card blue">
        <h2>Encontre o MakeBurger mais próximo de vc</h2>
        <p>Deixamos ainda mais fácil! Ative sua geolocalização e mostraremos o restaurante MakeBurger mais próximo de você.</p>
        <img src="/img/card02.jpg" class="image">
      </div>

      <div class="card red">
        <h2>A combinação perfeita chegou</h2>
        <p>Os brinquedos de Disney Princesa e Star Wars chegaram ao MakeBurger Feliz.</p>
        <img src="/img/card03.png" class="image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped>
  .row {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .card {
    background-color: #ffbe00;
    border-radius: 5px;
    box-shadow: 7px 7px 13px 0 rgba(50, 50, 50, 0.22);
    padding: 20px;
    margin: 20px;
    widows: 400px;
    transition: all 0.3s ease-out;
  }

  .card:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }

  .card-p {
    color: #a3a5ae;
    font-size: 16px;
  }

  .image {
    /*float: right;*/
    max-width: 420px;
    max-height: 420px;
    margin-top: 9px;
  }

  .green {
    border-left: 3px solid #a3a5ae;
  }

  .blue {
    border-left: 3px solid #a3a5ae;
  }

  .red {
    border-left: 3px solid #a3a5ae;
  }
</style>