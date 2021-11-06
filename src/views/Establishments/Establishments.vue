<template>
  <div id="Establishments">
    <!-- <h1>Estabelecimentos</h1> -->
		<SearchInput placeholder="Buscar" @updateTasks="updateTasks"/>
    <div class="establishments-container">
      <EstablishmentCard v-for="x in 14" :key="x"/>
    </div>
  </div>
</template>

<script>
import EstablishmentCard from '@/components/Establishment/EstablishmentCard/EstablishmentCard';
import SearchInput from '@/components/Inputs/SearchInput';

export default {
  name: 'Home',
  components: {
    EstablishmentCard,
    SearchInput
  },
};
</script>

<style scoped lang="scss">
@import "Establishments.scss";
</style>

