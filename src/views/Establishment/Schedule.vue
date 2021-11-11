<template>
  <div class="schedule">
    <ScheduleCalendar />
  </div>
</template>

<script>
import ScheduleCalendar from '@/components/Establishment/Schedule/ScheduleCalendar/ScheduleCalendar';

export default {
  name: 'schedule',
  components: {
    ScheduleCalendar,
  },
};
</script>
