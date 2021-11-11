<template>
  <div class="profile">
    <ProfileCard />
    <ProfileInfo />
  </div>
</template>

<script>
import ProfileCard from '@/components/Client/Profile/ProfileCard/ProfileCard';
import ProfileInfo from '@/components/Client/Profile/ProfileInfo/ProfileInfo';

export default {
  name: 'profile',
  components: {
    ProfileCard,
    ProfileInfo
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

<style lang="scss">
.profile {
    display: grid;
    grid-template-columns: 300px 1fr;
    align-items: flex-start;
    gap: 20px;
}
</style>
