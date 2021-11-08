<template>
  <div id="EstablishmentsList">
		<SearchInput placeholder="Buscar"/>
    <div class="establishments-container">
      <EstablishmentCard v-for="x in 14" :key="x"/>
    </div>
  </div>
</template>

<script>
import EstablishmentCard from '@/components/Establishments/EstablishmentCard/EstablishmentCard';
import SearchInput from '@/components/Inputs/SearchInput';

export default {
  name: 'EstablishmentsList',
  components: {
    EstablishmentCard,
    SearchInput
  },
};
</script>

<style scoped lang="scss">
@import "EstablishmentsList.scss";
</style>

