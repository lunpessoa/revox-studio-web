<template>
  <Modal
    :id="'SchedulingModal'"
    :visible="showModal"
    size="sm"
    @hide="resetInfo"
    @show="initInfo"
  >
    <template #title>
      Agendar
    </template>
    <template #center>
      <label class="date-field">
        {{ date }}
        <CalendarIcon class="icon"/>
      </label>
      <v-datepicker
        is-expanded 
        v-model="date"
        trim-weeks 
        :min-date="new Date()"
        :model-config="modelConfig"
        first-day-of-week="1"
        color="purple"
      />
      <div class="hours-container my-3" v-if="hours.length > 0">
        <button class="btn btn-primary" v-for="time in hours" :key="time.hour">{{ time.hour }}</button>
      </div>
      <div class="no-data" v-else>Selecione uma data!</div>
    </template>
  </Modal>
</template>

<script>
import Modal from '@/components/Shared/Modal/Modal'
import CalendarIcon from '@/components/Shared/Icons/CalendarIcon'

import { 
  SELECT_ESTABLISHMENT_SCHEDULING,
} from "@/store/establishments/actions"

export default {
    name: 'SchedulingModal',
    components: {
        Modal,
        CalendarIcon
    },
    data() {
      return {
        date: 'DD/MM/YYYY',
        modelConfig: {
          type: 'string',
          mask: 'DD/MM/YYYY'
        },
      }
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
      hours() {
        return [
          {
            id: 1,
            hour: "13:00"
          },
          {
            id: 2,
            hour: "14:00"
          },
          {
            id: 3,
            hour: "15:00"
          },
          {
            id: 4,
            hour: "16:00"
          },
          {
            id: 5,
            hour: "17:00"
          },
          {
            id: 6,
            hour: "18:00"
          },
          {
            id: 7,
            hour: "19:00"
          },
        ]
      }
    }
}
</script>

<style lang="scss">
@import 'SchedulingModal.scss';
</style>