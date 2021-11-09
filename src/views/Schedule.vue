<template>
  <div class="schedule">
    <ScheduleCalendar />
  </div>
</template>

<script>
import ScheduleCalendar from '@/components/Schedule/ScheduleCalendar/ScheduleCalendar';

export default {
  name: 'schedule',
  components: {
    ScheduleCalendar,
  },
};
</script>
