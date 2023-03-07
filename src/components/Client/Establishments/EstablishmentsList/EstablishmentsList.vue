<template>
  <div id="EstablishmentsList">
		<SearchInput placeholder="Buscar"/>
    <div class="establishments-container">
      <EstablishmentCard v-for="x in 14" :key="x"/>
    </div>
  </div>
</template>

<script>
import EstablishmentCard from '../EstablishmentCard/EstablishmentCard';
import SearchInput from '@/components/Inputs/SearchInput';

import { GET_ESTABLISHMENTS_REQUEST } from '@/store/establishments/actions'

export default {
  name: 'EstablishmentsList',
  components: {
    EstablishmentCard,
    SearchInput
  },
  created() {
    this.getEstablishments();
  },
  methods: {
    getEstablishments() {
      this.$store
				.dispatch(GET_ESTABLISHMENTS_REQUEST)
				.then((data) => {
          console.log(data);
				})
				.catch(e => {
          console.log(e);
				})
    }
  }
};
</script>

<style scoped lang="scss">
@import "EstablishmentsList.scss";
</style>

