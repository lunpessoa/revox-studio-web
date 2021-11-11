<template>
  <div class="schedule">
    <SchedulesCalendar />
    <SchedulesList />
  </div>
</template>

<script>
import SchedulesCalendar from '@/components/Establishment/Schedule/SchedulesCalendar/SchedulesCalendar';
import SchedulesList from '@/components/Establishment/Schedule/SchedulesList/SchedulesList';

export default {
  name: 'schedule',
  components: {
    SchedulesCalendar,
    SchedulesList
  },
};
</script>

<style lang="scss">
.schedule {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    gap: 20px;
}
</style>

