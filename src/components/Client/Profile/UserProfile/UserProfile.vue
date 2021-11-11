<template>
  <div class="user-profile">
    <ProfileCard />
    <ProfileInfo />
  </div>
</template>

<script>
import ProfileCard from '../ProfileCard/ProfileCard';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

export default {
  name: 'UserProfile',
  components: {
    ProfileCard,
    ProfileInfo
  }
};
</script>

<style lang='scss'>
@import 'UserProfile.scss';
</style>