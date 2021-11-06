<template>
  <Modal
    :id="'SchedulingModal'"
    :visible="showModal"
    size="sm"
    @hide="resetInfo"
    @show="initInfo"
  >
    <template #center>
      <v-calendar is-expanded trim-weeks :min-date="new Date()"/>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Shared/Modal/Modal.vue'

import { 
  SELECT_ESTABLISHMENT_SCHEDULING,
} from "@/store/establishments/actions"

export default {
    name: 'SchedulingModal',
    components: {
        Modal,
    },
    methods: {
      resetInfo() {
        this.$store.dispatch(SELECT_ESTABLISHMENT_SCHEDULING, null)
      },
      initInfo() {},
      closeModal() {
        this.$bvModal.hide('SchedulingModal');
      }
    },
    computed: {
      showModal() {
        return this.$store.getters.hasSelectedScheduling
      },
      selectedMarketing() {
        return this.$store.getters.getSelectedScheduling
      },
    }
}
</script>

<style lang="scss">
@import 'SchedulingModal.scss';
</style>