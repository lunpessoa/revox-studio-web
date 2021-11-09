<template>
  <div class="calendar-container">
    <v-calendar
      class="custom-calendar"
      :locale="locale"
      :attributes="attributes"
      disable-page-swipe
      title-position="right"
      :min-date="new Date()"
      is-expanded
      trim-weeks
    >
        <template #header="page">
            <div class="header-title"> 
                <CalenderIcon />
                <h2 class="mb-0">{{page.monthLabel}}</h2>
            </div>
        </template>
        <template #day-content="{ day, attributes }">
        <div class="day-container">
            <span class="day-label">{{ day.day }}</span>
            <div class="event-container">
            <p
                v-for="attr in attributes"
                :key="attr.key"
                :style="`background: ${attr.customData.color};color: #FFFFFF;`"
                class="bg-event mb-1"
                :class="hasEdit ? 'btn-edit' : ''"
            >
                {{ attr.customData.title }}
            </p>
            </div>
        </div>
        </template>
    </v-calendar>
  </div>
</template>

<script>
import CalenderIcon from "@/components/Shared/Icons/CalendarIcon";

export default {
  name: 'ScheduleCalendar',
  components: {
      CalenderIcon
  },
//   props: {
// 		data: {
// 			default: [],
// 			required: true,
// 		},
// 	},
  data: () => ({
      locale: { 
        firstDayOfWeek: 1, 
        dayNamesShort: ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'],
        masks: { weekdays: 'WWW' } 
      },
  }),
  computed: {
    attributes() {
        return [
            {
                key: 1,
                customData: {
                    id: 1,
                    color: "#3B185F",
                    title: `DD/MM/YYYY - Corte de Cabelo`,
                },
                dates: new Date("2021-11-09"),
            },
            {
                key: 2,
                customData: {
                    id: 2,
                    color: "#3B185F",
                    title: `DD/MM/YYYY - Corte de Cabelo`,
                },
                dates: new Date("2021-11-09"),
            },
            {
                key: 3,
                customData: {
                    id: 3,
                    color: "#3B185F",
                    title: `DD/MM/YYYY - Corte de Cabelo`,
                },
                dates: new Date("2021-11-20"),
            },
            {
                key: 4,
                customData: {
                    id: 4,
                    color: "#3B185F",
                    title: `DD/MM/YYYY - Corte de Cabelo`,
                },
                dates: new Date("2021-11-30"),
            },
            {
                key: 5,
                customData: {
                    id: 5,
                    color: "#3B185F",
                    title: `DD/MM/YYYY - Corte de Cabelo`,
                },
                dates: new Date("2021-12-04"),
            },
        ]
    },
  }
};
</script>

<style lang='scss'>
@import 'ScheduleCalendar.scss';
</style>