<template>
  <div id="EstablishmentCard" @click="goEstablishment">
    <div class="card-header">
      <div class="img-container">
        <img src="../../../assets/images/establishment.jpg" alt="">
      </div>
      <div class="card-body">
        <div class="d-flex flex-column">
          <h2>Estabelecimento 1</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </div>
      <div class="card-footer">
        <p>Av. Prefeito João Pires Filho, 22 - 13 de Maio</p>
        <button @click="goEstablishment">Visitar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EstablishmentCard',
  methods: {
    goEstablishment() {
      this.$router.push({ name: 'Establishment' });
    }
  }
};
</script>

<style scoped lang="scss">
@import "EstablishmentCard.scss";
</style>
