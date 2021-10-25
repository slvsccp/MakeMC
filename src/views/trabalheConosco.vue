<template>
  <header class="header">
    <h1>Quer fazer parte da nossa equipe?</h1>
    <img class="img" src="/img/trabalhe_conosco.jpg">
  </header>

  <main>
    <div class="header">
      <p class="paragrafo">Com mais de 50 mil funcionários no Brasil, o McDonald's é um dos maiores empregadores de jovens do país.<br />Todos os anos, realizamos o sonho do primeiro emprego de muita gente! Do nosso atual quadro de funcionários, cerca de 76% têm menos de 25 anos de idade e estão em sua primeira experiência.</p>
      <p class="paragrafo">Somos uma das empresas que mais oferece chances de ascensão profissional.<br /> Incentivamos o estudo e o aprimoramento, e temos orgulho de dizer que hoje aqui no Brasil, mais da metade dos gerentes ingressaram na companhia como atendentes, o primeiro degrau na escala hierárquica da empresa.</p>
      <!---<p class="paragrafo">Aqui, todos têm espaço e oportunidade, não admitimos discriminação e exigimos o mesmo respeito para todos os nossos funcionários, sem qualquer distinção de sexo, idade, raça, orientação sexual, religião ou aparência física.</p>--->
    </div>
  </main>
</template>

<script>
export default {
  name: 'trabalheConosco'
}
</script>

<style scoped>
  .header {
    margin: 25px;
    text-align: center;
    line-height: 25px;
  }

  img {
    border: 3px solid #FCBA03;
  }

  h1 {
    margin: 25px;
  }

  .paragrafo {
    text-align: center;
    margin: 5px;
  }
</style>