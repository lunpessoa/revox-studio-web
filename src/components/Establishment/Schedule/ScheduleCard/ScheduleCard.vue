<template>
  <div id="schedule-card">
    <div class="user-container">
      <div class="img-container">
        <img src="../../../../assets/images/user.png" alt="">
      </div>
      <div class="d-flex flex-column justify-content-between">
        <div class="d-flex flex-column">
          <h3 class="mb-0">Luan Pessoa</h3>
          <span class="email mb-1">luan.pessoa.393@hotmail.com</span>
          <span class="tell">(11) 99999-9999</span>
        </div>
        <div class="d-flex align-items-end">
          <span class="time mr-2">Horário 13:00</span>
          <span class="date">11/11/2021</span>
        </div>
      </div>
    </div>

    <div class="close-icon mx-2">
      <div class="icon">
        <CloseIcon />
      </div>
    </div>
  </div>
</template>

<script>
import CloseIcon from "@/components/Shared/Icons/CloseIcon"
import ClockIcon from "@/components/Shared/Icons/ClockIcon"

export default {
  name: 'ScheduleCard',
  components: {
    CloseIcon,
    ClockIcon
  },
  methods: {
    goEstablishment() {
      this.$router.push({ name: 'Establishment' });
    }
  }
};
</script>

<style scoped lang="scss">
@import "ScheduleCard.scss";
</style>
