<template>
  <div class="schedules-list">
    <div class="header">
      <span class="title">Agendamentos</span>
      <span class="date">
        Hoje 
        <CalendarIcon color="#f6edff"/>
      </span>
    </div>
    <div class="list mt-3">
      <ScheduleCard  v-for="x in 12" :key="x"/>
    </div>
  </div>
</template>

<script>
import CalendarIcon from '@/components/Shared/Icons/CalendarIcon';
import ScheduleCard from '../ScheduleCard/ScheduleCard';

export default {
  name: 'SchedulesList',
  components: {
    CalendarIcon,
    ScheduleCard
  },
  data() {
    return {
      imageFile: null,
    }
  },
  methods: {
    onPhotoSelected(event) {
      this.imageFile = event.target.files[0];
		},
    onErasePhoto() {
      this.imageFile = null;
    },
  }
};
</script>

<style lang='scss'>
@import 'SchedulesList.scss';
</style>