<template>
  <div id="schedules-calendar">
    <v-datepicker
        class="custom-calendar"
        v-model="date"
        is-expanded
        :min-date="new Date()"
        :model-config="modelConfig"
        :first-day-of-week="1"
        color="purple"
    />
  </div>
</template>

<script>
export default {
  name: 'SchedulesCalendar',
  data: () => ({
    modelConfig: {
        type: 'string',
        mask: 'DD/MM/YYYY'
    },
  }),
};
</script>

<style lang='scss'>
@import 'SchedulesCalendar.scss';
</style>