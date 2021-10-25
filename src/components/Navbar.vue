<template>
  <div id="nav">
    <router-link to="/" id="logo-url">
      <img :src="logo" :alt="alt" id="logo">
    </router-link>
    <router-link to="/">Home</router-link> |
    <router-link to="/montarburger">Monte seu MakeBurger</router-link> |
    <router-link to="/pedidos">Pedidos</router-link> |
    <router-link to="/trabalheConosco">Trabalhe Conosco</router-link>

    <!---<div id="multilinguas" :v-model="lang" @click="handleChange($event)">
      <button type="button" class="btn btn-flag" value="pt-BR" style='display:flex;align-items:center;justify-content:center;'><img src="/img/Brazil.png" style="width:auto;height:25px;display:block;"></button>
      <button type="button" class="btn btn-flag" value="en" style='display:flex;align-items:center;justify-content:center;'><img src="/img/Eua.png" style="width:auto;height:25px;display:block;"></button>
    </div>--->
    <!---<select :v-model="lang" @change="handleChange($event)">
      <option value="" selected>Selecione</option>
      <option value="en">English</option>
      <option value="pt-BR">Brazil</option>
      <option value="es">Spanish</option>
    </select>--->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: ["logo", "alt"],
  data: function() {
    const lang = localStorage.getItem('lang') || 'en';
    return {
      lang: lang
    }
  },
  methods: {
    handleChange(event) {
      localStorage.setItem('lang', event.target.value);
      window.location.reload();
    }
  }
}
</script>

<style scoped>
  #nav {
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 30px 300px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  #nav #logo-url {
    margin: auto;
    margin-left: 0;
  }
  #logo {
    width: 40px;
    height: 40px;
  }
  #nav a {
    color: #FCBA03;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
  }
  #nav a:hover {
    color: #FFF;
  }
</style>